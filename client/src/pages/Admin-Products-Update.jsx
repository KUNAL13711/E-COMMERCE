import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

export const AdminProductsUpdate = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const params = useParams();
  const { authorizationToken } = useAuth();

  // Get single product data by ID
  const getSingleDataById = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/getAllproducts/productById/${params.id}`, {
        method: "get",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const dataFromServer = await response.json();
      setData(dataFromServer);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch single product data on component mount
  useEffect(() => {
    getSingleDataById();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch (`http://localhost:3000/api/admin/getAllproducts/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Products updated successfully");
      } else {
        toast.error("Sorry, Products not updated");
      }
    } catch (error) {
      console.log({message: error.message});
    }
  };

  return (
    <div>
      <section className="py-8">
        <main className="container mx-auto">
          <div className="section-registration bg-gray-100 p-6 rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Products Update Area</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1">Product Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter The Product Name"
                  id="name"
                  required
                  autoComplete="off"
                  value={data.name}
                  onChange={handleInput}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="price" className="block mb-1">Price Details</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter Products Price"
                  id="price"
                  required
                  autoComplete="off"
                  value={data.price}
                  onChange={handleInput}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block mb-1">Set Description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Add Products description"
                  id="description"
                  required
                  autoComplete="off"
                  value={data.description}
                  onChange={handleInput}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>

              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Update</button>
            </form>
          </div>
        </main>
        <section></section>
      </section>
    </div>
  );
};
