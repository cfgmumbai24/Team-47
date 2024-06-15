import React from "react";
import "./StudentCard.css";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
// } from "chart.js";

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const StudentCard = ({ student }) => {
  const { name, profilePic, studentClass, marks, category } = student;

  const chartData = {
    labels: ["Literacy", "Numeracy", "Social-Emotional"],
    datasets: [
      {
        label: "Marks",
        data: [marks.literacy, marks.numeracy, marks.socialEmotional],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="full">
      <div className="main">
        {/* <img className=".pic" src={profilePic} /> */}
        <div className="div1">
          <h2 className="name">{name}</h2>
          <p className="text-gray-600">{studentClass}</p>
        </div>
        <div className="mt-6">{/* <Line data={chartData} /> */}</div>
        <div className="div2">
          <p className="text-lg">Marks</p>
          <ul>
            <li>Literacy: {marks.literacy}</li>
            <li>Numeracy: {marks.numeracy}</li>
            <li>Social-Emotional: {marks.socialEmotional}</li>
          </ul>
        </div>
        <h4>Category = {category}</h4>
      </div>
    </div>
  );
};

export default StudentCard;
