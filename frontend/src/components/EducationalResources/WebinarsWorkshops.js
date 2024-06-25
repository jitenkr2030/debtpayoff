import React, { useEffect, useState } from 'react';
import { getWebinars } from '../../services/resourceService';

const WebinarsWorkshops = () => {
  const [webinars, setWebinars] = useState([]);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const webinarData = await getWebinars();
        setWebinars(webinarData);
      } catch (error) {
        console.error('Failed to fetch webinars', error);
      }
    };

    fetchWebinars();
  }, []);

  return (
    <div>
      <h2>Webinars & Workshops</h2>
      {webinars.length > 0 ? (
        webinars.map((webinar, index) => (
          <div key={index}>
            <p>{webinar.title}</p>
            <p>{webinar.date}</p>
            <button>Register</button>
          </div>
        ))
      ) : (
        <p>No webinars available</p>
      )}
    </div>
  );
};

export default WebinarsWorkshops;
