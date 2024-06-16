import React, { useState, useEffect } from 'react';
import './VisitForm.css'; // Make sure to create this CSS file for styling
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VisitForm = ({ closeForm }) => {
  const [visitDate, setVisitDate] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [disease, setDisease] = useState('');
  const [diseases, setDiseases] = useState([]);
  const [error, setError] = useState(null);
    const {id} = useParams();

    const { userInfo } = useSelector((state) => state.auth);

  const handleDiseaseChange = (e) => {
    setDisease(e.target.value);
  };

  const addDisease = () => {
    if (disease) {
      setDiseases([...diseases, disease]);
      setDisease('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
    goatId : id,
    goatMitraId : userInfo.id,
      visitDate,
      height: parseFloat(height),
      weight: parseFloat(weight),
      diseases,
        
    };

    try {
      const response = await fetch('http://localhost:5000/goat/visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error recording visit');
      }

      console.log('Visit recorded successfully');
      window.location.reload();
      closeForm();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={closeForm}>
          &times;
        </span>
        <h2>Record Visit</h2>
        {error && <p className='error'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='form-field'>
            <label>
              Visit Date:
              <input
                type='date'
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                required
              />
            </label>
          </div>
          <div className='form-field'>
            <label>
              Height (cm):
              <input
                type='number'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </label>
          </div>
          <div className='form-field'>
            <label>
              Weight (kg):
              <input
                type='number'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </label>
          </div>
          <div className='form-field'>
            <label>
              Diseases:
              <input
                type='text'
                value={disease}
                onChange={handleDiseaseChange}
              />
              <button type='button' onClick={addDisease} className='adddis'>
                Add Disease
              </button>
            </label>
            <ul>
              <p>Diseases</p>
              {diseases.map((d, index) => (
                <li key={index}>{d}</li>
              ))}
            </ul>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default VisitForm;
