import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const defaultContactFormData = {
  date: "",
  name: "",
  price: "",
  description: "",
};

export const AdminAddProducts = () => {
  const [member, setMember] = useState(defaultContactFormData);
  const { authorizationToken } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/admin/adminAddProducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(member),
      });

      if (response.ok) {
        setMember(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Products Added successfully");
      }
    } catch (error) {
      console.error("Products Not Added", error);
      toast.error("Products Not Added");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Product Editor</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-1">Select Date</label>
          <input
            type="date"
            name="date"
            id="date"
            required
            value={member.date}
            onChange={handleInput}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={member.name}
            onChange={handleInput}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-1">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            required
            value={member.price}
            onChange={handleInput}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            required
            value={member.description}
            onChange={handleInput}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">Add Products</button>
      </form>
    </div>
  );
};
