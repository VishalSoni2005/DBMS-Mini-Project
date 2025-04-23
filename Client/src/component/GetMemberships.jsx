
import React, { useEffect, useState } from "react";
import axios from "axios";

const GetMemberships = () => {
  const [memberships, setMemberships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getMemberships")
      .then((res) => {
        console.log("Fetched memberships:", res.data);

        setMemberships(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-8">Loading users...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">User List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border border-gray-300">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Duration</th>
              <th className="px-4 py-2 border">Access Level</th>
              <th className="px-4 py-2 border">Short Description</th>
            </tr>
          </thead>
          <tbody>
            {memberships.map((plan) => (
              <tr
                key={plan.ID}
                className="border-t">
                <td className="px-4 py-2 border">{plan.ID}</td>
                <td className="px-4 py-2 border">{plan.NAME}</td>
                <td className="px-4 py-2 border">
                  {`₹ ${plan.PRICE}`}
                </td>
                <td className="px-4 py-2 border">{plan.DURATION}</td>
                <td className="px-4 py-2 border">{plan.ACCESS_lEVEL}</td>
                <td className="px-4 py-2 border">{plan.DESCRIPTION}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetMemberships;
