import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar'
import GoatCard from '../../Components/GoatCard/GoatCard';

const Goats = () => {
  const { username, id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  const fetchInfo = async () => {
    try {
      const res = await fetch(`http://localhost:4000/${id}/goats`);
      const d = await res.json();
      setData(d);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
    console.log(data);
  }, [username, id]);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar id={username} />
      <div className='flex-column mx-auto'>
        {data.map((item) => {
          return <GoatCard id = {item.id} name={item.name} gender={item.gender} dob={item.dob} pId = {id}/>
        })}
      </div>
    </div>
  )
}

export default Goats;