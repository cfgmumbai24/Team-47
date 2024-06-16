import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar'
import Goat from '../../Components/Goat/Goat';
import { BubbleChat } from 'flowise-embed-react'

const GoatInfo = () => {
    const { username, id, goat } = useParams();
    const [data, setData] = useState([]);
    const [selectedGoat, setSelectedGoat] = useState("");
    const fetchInfo = async () => {
        try {
            const res = await fetch(`http://localhost:4000/${id}/goats`);

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const goats = await res.json();
            console.log('Fetched data:', goats);

            setData(goats);
            const foundGoat = goats.find(g => g.id == goat);
            if (foundGoat) {
                console.log("here");
                console.log(foundGoat);
                setSelectedGoat(foundGoat);
            }else{
                console.log("null");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, [username, id, goat]);

    return (
        <>
        <div style={{ display: 'flex' }}>
            <Sidebar id={username} />
            <Goat name = {selectedGoat.name} id = {selectedGoat.id} gen = {selectedGoat.gender} dob = {selectedGoat.dob} vac = {selectedGoat.vaccinationDate}/>
        </div>
        <BubbleChat chatflowid="038eee86-2e22-4b40-b78a-0518efda4c48" apiHost="https://bot-for-goat.onrender.com" />
        </>
    )
}

export default GoatInfo;