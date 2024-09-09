import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";

const AddFinancial = () => {
  const [financials, SetFinancials] = useState({
    userId: "",
    description: "",
    date: "",
    amount: "",
    category: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFinancials({ ...financials, [name]: value });
  };

  const handSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/financial/",
        financials
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Add Financial tracker!",
          text: "Financial tracker has been added successfully.",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Add Financial tracker",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="max-w-md mx-10 p-8 rounded-lg space-y-6 text-start ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 ">
        <div className="relative ">
          <span className="block  text-lg  font-medium text-gray-700">
            UserId
          </span>
          <input
            type="text"
            className="w-full pl-4 pr-4 py-3 text-ms border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="userId"
            name="userId"
            value={financials.userId}
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <span className="block  text-lg  font-medium text-gray-700 mt-3">
            Description
          </span>
          <input
            type="text"
            className="w-full pl-4 pr-4 py-3 text-ms border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Description"
            name="description"
            value={financials.description}
            onChange={handleChange}
          />
        </div>

        <div className="relative">
          <span className="block text-lg  font-medium text-gray-700 mt-3 ">
            Amount
          </span>
          <input
            type="text"
            className="w-full pl-4 pr-4 py-3 text-ms border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Amount"
            name="amount"
            value={financials.amount}
            onChange={handleChange}
          />
        </div>

        <div className="relative">
          <span className="block  text-lg font-medium text-gray-700 mt-3">
            Date
          </span>
          <input
            type="Date"
            className="w-full pl-4 pr-4 py-3 text-ms border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Date"
            name="date"
            value={financials.date}
            onChange={handleChange}
          />
        </div>

        <div className="relative">
          <label
            htmlFor="category"
            className="block text-lg font-medium text-gray-700 mt-3"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full pl-4 pr-4 py-3 text-ms border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={financials.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Lunch">Lunch</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Dinner">Dinner</option>
            <option value="Dink">Dink</option>
          </select>
        </div>

        <div className="relative">
          <label
            htmlFor="paymentMethod"
            className="block text-lg font-medium text-gray-700 mt-3"
          >
            Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            className="w-full pl-4 pr-4 py-3 text-ms border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={financials.paymentMethod}
            onChange={handleChange}
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>

        <div className="mb-6 text-center pt-5">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handSubmit}
          >
            ส่งข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFinancial;
