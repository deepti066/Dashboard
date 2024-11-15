// src/Location.jsx
import React, { useEffect } from 'react';
import './Location.css';

const Location = () => {
  useEffect(() => {
    // Initialize the Google Map when the component is mounted
    const companyLocation = { lat: 40.748817, lng: -73.985428 }; // Example coordinates (Empire State Building)
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: companyLocation,
      zoom: 15,
    });

    // Add a marker for the company location
    new window.google.maps.Marker({
      position: companyLocation,
      map: map,
      title: 'Company Location',
    });
  }, []);

  return (
    <div className="location-container">
      <h2>Our Company Location</h2>
      <div id="map" className="map"></div>
      <div className="address">
        <h3>Company Address:</h3>
        <p>123 Main St, New York, NY 10001</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> contact@company.com</p>
      </div>
    </div>
  );
};

export default Location;
