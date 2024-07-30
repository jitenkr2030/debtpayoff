// src/components/Features/Features.js
import React, { useEffect, useState } from 'react';
import { getFeatures } from '../../services/apiService';
import './Features.css'; // Assuming you have a CSS file for styling

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const data = await getFeatures();
        setFeatures(data);
      } catch (error) {
        setError('Error fetching features');
        console.error('Error fetching features:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="features-container">
      <h2>Our Features</h2>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <h3>{feature.name}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
