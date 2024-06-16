import React, { useState } from 'react'
import { useParams, useNavigate  } from 'react-router-dom';

const VisitForm = () => {
    const { username, id, goat } = useParams();
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        goatMitraId: username,
        goatId: goat,
        visitDate: "",
        height: 0,
        weight: 0,
        disease: ""
    })
    const changeHandler = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }
    const AddVisit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/goat/visit', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(details)
            });
            console.log(details);
            const data = await response.json();
            if (data.success) {
                alert("Added");
                navigate(`/user/${username}/${id}/${goat}`);
            } else {
                alert("Failed: " + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Failed: " + error.message);
        }
    };
    return (
        <form onSubmit={AddVisit} className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-5">Goat Information</h1>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="goatName">
                    Height
                </label>
                <input
                    type="text"
                    id="height"
                    name="height"
                    className="w-full px-3 py-2 border rounded-lg" onChange={changeHandler}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="goatId">
                    Weight
                </label>
                <input
                    type="text"
                    id="weight"
                    name="weight"
                    className="w-full px-3 py-2 border rounded-lg" onChange={changeHandler}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="visitDate">
                    Visit Date
                </label>
                <input
                    type="date"
                    id="visitDate"
                    name="visitDate"
                    className="w-full px-3 py-2 border rounded-lg" onChange={changeHandler}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="goatName">
                    Disease
                </label>
                <input
                    type="text"
                    id="disease"
                    name="disease"
                    className="w-full px-3 py-2 border rounded-lg" onChange={changeHandler}
                />
            </div>


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    <input
                        type="checkbox"
                        name="recentlyVaccinated"
                        className="mr-2 leading-tight"
                    />
                    Recently Vaccinated
                </label>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg">
                Submit
            </button>
        </form>
    );
}

export default VisitForm