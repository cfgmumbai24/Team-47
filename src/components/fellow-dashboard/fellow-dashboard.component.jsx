import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Using react-icons for the profile icon

const FellowDashboard = () => {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <Link to="/profile">
          <FaUserCircle size={30} />
        </Link>
      </header>
      <div>Welcome to the Fellow Dashboard!</div>
    </div>
  );
};

export default FellowDashboard;
