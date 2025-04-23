import React, { useState, useEffect } from "react";
import axios from "axios";

const Attendance = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
      });
  }, []);

  const fetchAttendance = (e) => {
    e.preventDefault();
    if (!selectedUserId) return;

    setLoading(true);
    axios
      .post(`http://localhost:3000/attendance/${selectedUserId}`)
      .then((res) => {
        console.log("Attendance data:", res.data);
        
        setAttendance(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching attendance:", err);
        setLoading(false);
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">User Attendance</h2>

      <form
        onSubmit={fetchAttendance}
        className="mb-6 flex items-center gap-4">
        <select
          className="p-2 border border-gray-300 rounded"
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}>
          <option value="">Select User ID</option>
          {users.map((user) => (
            <option
              key={user.id}
              value={user.id}>
              {user.id} - {user.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500">
          Get Attendance
        </button>
      </form>

      {loading ? (
        <p className="text-center">Loading attendance...</p>
      ) : (
        attendance.length > 0 && (
          <table className="w-full border border-gray-300 text-left text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>

                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">User ID</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Check in Time</th>
                <th className="px-4 py-2 border">Check out Time</th>
                <th className="px-4 py-2 border">Duration</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((entry, index) => (
                <tr
                  key={index}
                  className="border-t">
                  <td className="px-4 py-2 border">{entry.id}</td>
                  <td className="px-4 py-2 border">{entry.user_id}</td>
                  <td className="px-4 py-2 border">{entry.attendance_date}</td>
                  <td className="px-4 py-2 border">
                    {entry.check_in}
                  </td>
                  <td className="px-4 py-2 border">
                    {entry.check_out}
                  </td>
                  <td className="px-4 py-2 border">
                    {entry.duration_in_minute}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </div>
  );
};

export default Attendance;
