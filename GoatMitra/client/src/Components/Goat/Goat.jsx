import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Goat = (props) => {
  const { username, id, goat } = useParams();
  return (
    <form className="max-w-4xl mx-auto mt-10 p-8 border rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Goat Information</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="goatName"
          >
            Goat Name
          </label>
          <input
            type="text"
            id="goatName"
            name="goatName"
            value={props.name}
            readOnly
            className="w-full px-3 py-2 border rounded-lg bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="goatId"
          >
            Goat ID
          </label>
          <input
            type="text"
            id="goatId"
            name="goatId"
            value={props.id}
            readOnly
            className="w-full px-3 py-2 border rounded-lg bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={props.gen}
            readOnly
            className="w-full px-3 py-2 border rounded-lg bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dob"
          >
            Date of Birth
          </label>
          <input
            type="text"
            id="dob"
            name="dob"
            value={props.dob}
            readOnly
            className="w-full px-3 py-2 border rounded-lg bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastVaccinationDate"
          >
            Last Vaccination Date
          </label>
          <input
            type="text"
            id="lastVaccinationDate"
            name="lastVaccinationDate"
            value={props.vac}
            readOnly
            className="w-full px-3 py-2 border rounded-lg bg-gray-100"
          />
        </div>
      </div>


      <div className="flex justify-between mt-8">
        <Link to={`/user/${username}/${id}/${goat}/visit`}>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Add New
          </button>
        </Link>
        <button className="bg-red-500 text-white py-2 px-4 rounded-lg">
          <Link to="https://aec5b7b7dd8a0bd4b6.gradio.live">
            Predict Physical Disease
          </Link>
        </button>
      </div>


    </form>
  );
}

export default Goat