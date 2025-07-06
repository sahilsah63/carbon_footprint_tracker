// import React from 'react';
// import { auth } from '../Firebase/firebaseconfig';
// import { signOut } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// function Dashboard() {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate('/');
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h2>Welcome, {auth.currentUser?.email}</h2>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default Dashboard;

import React from 'react';
import { auth } from '../Firebase/firebaseconfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy data for the chart
const data = [
  { name: 'Day 1', carbonFootprint: 4000 },
  { name: 'Day 2', carbonFootprint: 3000 },
  { name: 'Day 3', carbonFootprint: 2000 },
  { name: 'Day 4', carbonFootprint: 2780 },
  { name: 'Day 5', carbonFootprint: 1890 },
  { name: 'Day 6', carbonFootprint: 2390 },
  { name: 'Day 7', carbonFootprint: 3490 },
];

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Welcome, {auth.currentUser?.email}</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Weekly Carbon Footprint</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="carbonFootprint" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
