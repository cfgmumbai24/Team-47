// // StudentProfile.jsx
// import React from 'react';
// import PerformanceGraph from './PerformanceGraph';

// const studentMonthlyPerformanceData = [65, 59, 80, 81, 56, 55, 40, 70, 75, 90, 85, 95];
// const studentQuarterlyPerformanceData = [
//   (65 + 59 + 80) / 3,
//   (81 + 56 + 55) / 3,
//   (40 + 70 + 75) / 3,
//   (90 + 85 + 95) / 3,
// ];

// const StudentProfile = () => {
//   return (
//     <div>
//       <h2>Student Profile</h2>
//       {/* Add other student profile details here */}
//       <h3>Performance Graph</h3>
//       <PerformanceGraph
//         monthlyData={studentMonthlyPerformanceData}
//         quarterlyData={studentQuarterlyPerformanceData}
//       />
//     </div>
//   );
// };

// export default StudentProfile;

// import React from 'react';
// import PerformanceGraph from './PerformanceGraph';
// import './StudentProfile.css'; // Assuming you have a CSS file for styling

// const studentMonthlyPerformanceData = [65, 59, 80, 81, 56, 55, 40, 70, 75, 90, 85, 95];
// const studentQuarterlyPerformanceData = [
//   (65 + 59 + 80) / 3,
//   (81 + 56 + 55) / 3,
//   (40 + 70 + 75) / 3,
//   (90 + 85 + 95) / 3,
// ];

// const StudentProfile = ({ student }) => {
//   const { name, profilePic, literacy, numeracy, socialEmotional, division, attendance, category } = student;

//   return (
//     <div className="student-profile">
//       <div className="profile-header">
//         <img className="profile-pic" src={profilePic} alt={`${name}'s profile`} />
//         <div className="profile-details">
//           <h2>{name}</h2>
//           <p>Division: {division}</p>
//           <p>Attendance: {attendance}</p>
//           <p>Category: {category}</p>
//         </div>
//       </div>
      
//       <h3>Performance Graph</h3>
//       <PerformanceGraph
//         monthlyData={studentMonthlyPerformanceData}
//         quarterlyData={studentQuarterlyPerformanceData}
//       />
      
//       <div className="subject-scores">
//         <h3>Subject Scores</h3>
//         <ul>
//           <li>Literacy: {literacy}</li>
//           <li>Numeracy: {numeracy}</li>
//           <li>Social-Emotional: {socialEmotional}</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default StudentProfile;

import React from 'react';
import PerformanceGraph from './PerformanceGraph';
import './StudentProfile.css'; // Assuming you have a CSS file for styling

// Random data for demonstration
const student = {
  name: 'John Doe',
  profilePic: 'https://via.placeholder.com/150',
  literacy: 85,
  numeracy: 90,
  socialEmotional: 80,
  division: 'Class 5A',
  attendance: '92%',
  category: 'A',
};

const studentMonthlyPerformanceData = [65, 59, 80, 81, 56, 55, 40, 70, 75, 90, 85, 95];
const studentQuarterlyPerformanceData = [
  (65 + 59 + 80) / 3,
  (81 + 56 + 55) / 3,
  (40 + 70 + 75) / 3,
  (90 + 85 + 95) / 3,
];

const StudentProfile = () => {
  const { name, profilePic, literacy, numeracy, socialEmotional, division, attendance, category } = student;

  return (
    <div className="student-profile">
      <div className="profile-header">
        <img className="profile-pic" src={profilePic} alt={`${name}'s profile`} />
        <div className="profile-details">
          <h2>{name}</h2>
          <p>Division: {division}</p>
          <p>Attendance: {attendance}</p>
          <p>Category: {category}</p>
        </div>
      </div>
      
      <h3>Performance Graph</h3>
      <PerformanceGraph
        monthlyData={studentMonthlyPerformanceData}
        quarterlyData={studentQuarterlyPerformanceData}
      />
      
      <div className="subject-scores">
        <h3>Subject Scores</h3>
        <ul>
          <li>Literacy: {literacy}</li>
          <li>Numeracy: {numeracy}</li>
          <li>Social-Emotional: {socialEmotional}</li>
        </ul>
      </div>
    </div>
  );
};

export default StudentProfile;
