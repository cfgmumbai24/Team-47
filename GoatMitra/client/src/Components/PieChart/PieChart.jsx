import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Ensure this import is included
import './PieChart.css';

const GenderPieChart = () => {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:4000/goats')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Log the data
        const maleCount = data.filter(goat => goat.gender === 'Male').length;
        const femaleCount = data.filter(goat => goat.gender === 'Female').length;
        setMaleCount(maleCount);
        setFemaleCount(femaleCount);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const data = {
    labels: ['Male', 'Female'],
    datasets: [{
      label: 'Goat Gender',
      data: [maleCount, femaleCount],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }]
  };

  return (
    <div className='mx-auto' style={{marginTop:'80px'}}>
      <h2>Goat Gender Distribution</h2>
      <div className='chart'>
      {maleCount || femaleCount ?   <Pie data={data}/> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default GenderPieChart;