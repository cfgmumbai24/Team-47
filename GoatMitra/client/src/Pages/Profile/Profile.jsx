import React, { useEffect, useState } from 'react'
import './Profile.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, useParams } from 'react-router-dom'
import Info from '../../Components/Info/Info'

const Profile = () => {
    const { username } = useParams();
    const [data, setData] = useState([]);
    const fetchInfo = async () => {
        try {
            const res = await fetch(`http://localhost:4000/goatMitra/${username}`);
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
            <div style={{ flex: 1, padding: '50px' }}>
                <h1>{data.name}</h1>
                <p style={{fontSize:'20px'}}>Area: {data.area}</p>
                <p style={{fontSize:'20px'}}>Phone Number: {data.phoneNumber}</p>
            </div>
        </div>
    )
}

export default Profile