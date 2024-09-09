import React from "react";

const FinancialTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>userId</th>
            <th>description</th>
            <th>date</th>
            <th>amount</th>
            <th>category</th>
            <th>paymentMethod</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <div>
              <a href={`/Edit/`} className="btn btn-info">
                Edit
              </a>
              <button className="btn btn-error">DELETE</button>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTable;
