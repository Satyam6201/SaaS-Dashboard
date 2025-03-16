import React, { useState } from "react";

const dummyUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "David Johnson", email: "david@example.com", role: "User" },
  { id: 4, name: "Sarah Lee", email: "sarah@example.com", role: "Manager" },
  { id :5, name: "Satyam Kumar", email: "satyam@example.com", role: "Manager"},
  { id: 6, name: "Utsav Singh", email: "utsav@example.com", role: "Admin" },
  { id: 7, name: "Shivam Ashish", email: "hivam@example.com", role: "User" },
  { id: 8, name: "Jack", email: "jack@example.com", role: "User" },
  { id: 9, name: "Finn Allen", email: "Finn@example.com", role: "Manager" },
  { id :10, name: "jacob Duffy", email: "Jacob@example.com", role: "Manager"}
];

function Users() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = dummyUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center dark:text-white mb-5">Users</h2>
      <input type="text" placeholder="Search users..." className="w-full p-2 border rounded" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <div className="mt-4 bg-white shadow-lg p-4 rounded">
        {filteredUsers.map((user) => (
          <div key={user.id} className="p-2 border-b">{user.name} - {user.email}</div>
        ))}
      </div>
    </div>
  );
}

export default Users;