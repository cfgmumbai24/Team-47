import React from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar'
import PieChart from '../../Components/PieChart/PieChart'

const Analysis = () => {
    const { username } = useParams();
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar id={username} />
      <PieChart />
    </div>
  )
}

export default Analysis