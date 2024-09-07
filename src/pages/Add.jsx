import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";

const Add = () => {
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
        SetFinancials({
          name: "",
          type: "",
          imageUrl: "",
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
    <div className="max-w-md mx-auto p-8 rounded-lg  space-y-6">
      <span>Financial Tracter</span>
      <p>Welcome!, ______________</p>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <div className="relative">
          <span>userId</span>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="userId"
            name="userId"
            value={financials.userId}
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <span>Description</span>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Description"
            name="description"
            value={financials.description}
            onChange={handleChange}
          />
        </div>

        <div className="relative">
          <span>Amount</span>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Amount"
            name="amount"
            value={financials.amount}
            onChange={handleChange}
          />
        </div>

        <div className="relative">
          <span>Cetagory</span>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Cetagory"
            name="category"
            value={financials.category}
            onChange={handleChange}
          />
        </div>

        <div className="relative">
          <span>Payment</span>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Payment Method"
            name="paymentMethod"
            value={financials.paymentMethod}
            onChange={handleChange}
          />
        </div>

        <div className="relative">
          <span>Date</span>
          <input
            type="Date"
            className="w-full pl-12 pr-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Date"
            name="date"
            value={financials.date}
            onChange={handleChange}
          />
          <div className="mb-6 text-center pt-5">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handSubmit}
            >
              ส่งข้อมูล
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
