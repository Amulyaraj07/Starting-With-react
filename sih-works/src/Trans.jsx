import React from 'react';

function StatusItem({ status, location }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-md">
      <div className="flex flex-col space-y-1">
        <p className="text-gray-700 font-semibold">{status}</p>
        <p className="text-gray-500">{location}</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        {status}
      </button>
    </div>
  );
}
export default StatusItem;

// ... rest of the StatusList component