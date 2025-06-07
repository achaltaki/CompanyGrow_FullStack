import React from 'react';

const EmployeeProfile = ({ profile }) => {
  return (
    <div className="p-4 max-w-xl mx-auto bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold">Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Skills:</strong> {profile.skills.join(', ')}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Training Progress</h3>
      </div>
    </div>
  );
};

export default EmployeeProfile;