// src/components/Profile.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import './Profile.css';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const profileData = {
  name: "Jane Smith",
  profilePic: "https://via.placeholder.com/150",
  email: "janesmith@example.com",
  performance: {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Performance',
        data: [65, 59, 80, 81, 56, 55, 40, 70, 75, 82, 90, 88],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  },
};

const Profile = () => {
  return (
    <div className="profile-container p-6 bg-white rounded-lg shadow-md">
      <div className="profile-header flex flex-col items-center">
        <img className="profile-pic w-24 h-24 rounded-full" src={profileData.profilePic} alt="Profile" />
        <h2 className="profile-name mt-4 text-xl font-semibold">{profileData.name}</h2>
        <p className="profile-email mt-2 text-gray-600">{profileData.email}</p>
      </div>
      <div className="profile-chart mt-6 w-full">
        <Line data={profileData.performance} />
      </div>
    </div>
  );
};

export default Profile;
