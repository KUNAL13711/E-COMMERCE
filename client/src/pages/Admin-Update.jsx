import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { authorizationToken } = useAuth();

  // get single user data
  const singleDataById = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const dataFromServer = await response.json();
      console.log("user single data:", dataFromServer);
      setData(dataFromServer);
    } catch (error) {
      console.log(error);
    }
  };

  // get the single user data
  useEffect(() => {
    singleDataById();
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
    //console.log(data);

    try {
      const response = await fetch (`http://localhost:3000/api/admin/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("User data updated successfully");
      } else {
        toast.error("Sorry, user data not updated");
      }
    } catch (error) {
      console.log({message: error.message});
    }
  };

  return (
    <div>
      <section className="bg-gray-100 min-h-screen py-8">
        <main className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
          <div>
            <h1 className="text-3xl font-semibold mb-4">Update User Information</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  id="username"
                  required
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInput}
                  className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  id="email"
                  required
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                  className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  id="phone"
                  required
                  autoComplete="off"
                  value={data.phone}
                  onChange={handleInput}
                  className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                />
              </div>

              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">Update</button>
            </form>
          </div>
        </main>
      </section>
    </div>
  );
};
