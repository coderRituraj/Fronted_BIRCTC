import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TrainInformation.css';

const TrainInfo = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch train information from the database
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your API endpoint

        // Update the state with the fetched data
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching train information:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Train Information</h1>
      {trains.map((train) => (
        <div className="card" key={train.id}>
          <div className="card-header">Train Name: {train.name}</div>
          <div className="card-body">
            <div className="card-item">Distance: {train.distance}</div>
            <div className="card-item">Destination: {train.destination}</div>
            <div className="card-item">Boarding: {train.boarding}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainInfo;
