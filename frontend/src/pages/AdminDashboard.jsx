import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="p-4 bg-white shadow rounded-xl">Manage Users</div>
        <div className="p-4 bg-white shadow rounded-xl">Manage Courses</div>
        <div className="p-4 bg-white shadow rounded-xl">Manage Projects</div>
      </div>
    </div>
  );
};

export default AdminDashboard;