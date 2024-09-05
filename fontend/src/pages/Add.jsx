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

  const handSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/financial/", financials)
      .then((response) => {
        if (response.status === 200) {
          return Swal.fire({
            title: "Add Financial tracker!",
            text: "Financial tracker has been added successfully.",
            icon: "success",
          });
        }
        throw new Error("Failed to add financial tracker");
      })
      .then(() => {
        // รีโหลดหน้าเว็บ
        window.location.reload();
      })
      .catch((error) => {
        Swal.fire({
          title: "Add Financial tracker",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="max-w-md mx-auto p-8 rounded-lg  space-y-6">
      <h1 class="text-4xl font-bold text-center mb-8">Financial Tracker</h1>
      <p className="font-medium ">Welcome!, ______________</p>
      <form className="bg-white drop-shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-96 text-start">
        <div className="relative">
          <span className="font-medium text-lg ">UserId</span>

          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="userId"
            name="userId"
            value={financials.userId}
            onChange={handleChange}
          />
        </div>
        <div className="relative pt-3">
          <span className="font-medium text-lg ">Description</span>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Description"
            name="description"
            value={financials.description}
            onChange={handleChange}
          />
        </div>

        <div className="relative pt-3">
          <span className="font-medium text-lg">Amount</span>
          <input
            type="number"
            className="w-full pl-12 pr-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Amount"
            name="amount"
            value={financials.amount}
            onChange={handleChange}
          />
        </div>

        <div className="relative pt-3">
          <span className="font-medium text-lg">Date</span>
          <input
            type="Date"
            className="w-full pl-12 pr-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Date"
            name="date"
            value={financials.date}
            onChange={handleChange}
          />
        </div>

        <div className="relative pt-3">
          <span className="font-medium text-lg">Category</span>
          <select
            className="w-full pl-12 pr-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            name="category"
            value={financials.category}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Food">Food</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Drink">Drink</option>
            {/* เพิ่มตัวเลือกหมวดหมู่ที่คุณต้องการ */}
          </select>
        </div>

        <div className="relative pt-3">
          <span className="font-medium text-lg">Payment Medthod</span>
          <select
            className="w-full pl-12 pr-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            name="paymentMethod"
            value={financials.paymentMethod}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a Payment
            </option>
            <option value="Cash">Cash</option>
            <option value="Online Banking">Bank Transfer</option>
            <option value="Visa & MasterCard">Visa & MasterCard</option>
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

export default Add;
