import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar'
import PalakCard from '../../Components/PalakCard/PalakCard';

const Palak = () => {
  const { username } = useParams();
  const [data, setData] = useState([]);
  const fetchInfo = async () => {
    try {
      const res = await fetch(`http://localhost:4000/goatpalaks`);
      const d = await res.json();
      setData(d);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, [username]);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar id={username} />
      <div className='flex-column mx-auto'>
        {data.map((item) => {
          return <PalakCard id = {item.goatPalakId} name={item.name} address={item.address} phone={item.phoneNumber} />
        })}
      </div>
    </div>
  )
}

export default Palak;