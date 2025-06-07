import React from 'react';
import CourseCatalog from './pages/CourseCatalog';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">CompanyGrow</h1>
      <CourseCatalog />
      <AdminDashboard />
    </div>
  );
}

export default App;