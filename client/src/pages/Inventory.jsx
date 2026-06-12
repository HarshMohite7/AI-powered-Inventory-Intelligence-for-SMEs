import { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import API from "../services/api";

function Inventory() {
  const [products, setProducts] = useState([]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    stock: "",
    threshold: "",
    vendor: "",
  });

  // Fetch inventory from backend
  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response =
        await API.get("/inventory");

      setProducts(response.data);
    } catch (error) {
      console.error(
        "Error fetching inventory:",
        error
      );
    }
  };

  // Add Product
  const addProduct = async () => {
    if (
      !newProduct.name ||
      !newProduct.stock ||
      !newProduct.threshold ||
      !newProduct.vendor
    ) {
      return;
    }

    try {
      await API.post(
        "/inventory",
        newProduct
      );

      fetchInventory();

      setNewProduct({
        name: "",
        stock: "",
        threshold: "",
        vendor: "",
      });
    } catch (error) {
      console.error(
        "Error adding product:",
        error
      );
    }
  };

  // Delete Product
  const deleteProduct = async (
    id
  ) => {
    try {
      await API.delete(
        `/inventory/${id}`
      );

      fetchInventory();
    } catch (error) {
      console.error(
        "Error deleting product:",
        error
      );
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            Inventory
          </h1>

          <p className="text-slate-400 mt-2">
            Manage inventory items
          </p>
        </div>
      </div>

      {/* Add Product Form */}
      <div className="bg-slate-900 p-6 rounded-2xl mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Add Product
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                name: e.target.value,
              })
            }
            className="bg-slate-800 p-3 rounded-lg outline-none"
          />

          <input
            type="number"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                stock: e.target.value,
              })
            }
            className="bg-slate-800 p-3 rounded-lg outline-none"
          />

          <input
            type="number"
            placeholder="Threshold"
            value={newProduct.threshold}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                threshold: e.target.value,
              })
            }
            className="bg-slate-800 p-3 rounded-lg outline-none"
          />

          <input
            type="text"
            placeholder="Vendor"
            value={newProduct.vendor}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                vendor: e.target.value,
              })
            }
            className="bg-slate-800 p-3 rounded-lg outline-none"
          />
        </div>

        <button
          onClick={addProduct}
          className="mt-4 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-medium transition"
        >
          Add Product
        </button>
      </div>

      {/* Inventory Table */}
      <div className="bg-slate-900 rounded-2xl p-6 shadow-lg overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-400 border-b border-slate-700">
              <th className="pb-4">Item</th>
              <th className="pb-4">Stock</th>
              <th className="pb-4">Threshold</th>
              <th className="pb-4">Vendor</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-slate-800"
              >
                <td className="py-4">
                  {product.name}
                </td>

                <td className="py-4">
                  {product.stock}
                </td>

                <td className="py-4">
                  {product.threshold}
                </td>

                <td className="py-4">
                  {product.vendor}
                </td>

                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      Number(product.stock) <=
                      Number(product.threshold)
                        ? "bg-red-500/20 text-red-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {Number(product.stock) <=
                    Number(product.threshold)
                      ? "Low Stock"
                      : "Healthy"}
                  </span>
                </td>

                <td className="py-4">
                  <button
                    onClick={() =>
                      deleteProduct(
                        product.id
                      )
                    }
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default Inventory;