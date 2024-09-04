import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [financial, SetFinancials] = useState({
    userId: "",
    description: "",
    date: "",
    amount: "",
    category: "",
    paymentMethod: "",
  });

  useEffect(() => {
    const getFinancials = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/financial/",
          financial
        );

        if (response.status === 200) {
          SetFinancials(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Restaurant",
          text: error.response.data.message || error.message,
          icon: "error",
        });
      }
    };
    getFinancials();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{financial.userId}</div>
                </div>
              </div>
            </td>
            <td alt="Description">
              Description
              <br />
            </td>
            <td alt="Date">Date</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
