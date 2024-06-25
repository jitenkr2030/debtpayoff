import React, { useEffect, useState } from 'react';
import { getResources } from '../../services/resourceService';

const ResourceLibrary = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const resourceData = await getResources();
        setResources(resourceData);
      } catch (error) {
        console.error('Failed to fetch resources', error);
      }
    };

    fetchResources();
  }, []);

  return (
    <div>
      <h2>Resource Library</h2>
      {resources.length > 0 ? (
        resources.map((resource, index) => (
          <div key={index}>
            <p>{resource.title}</p>
            <p>{resource.description}</p>
          </div>
        ))
      ) : (
        <p>No resources available</p>
      )}
    </div>
  );
};

export default ResourceLibrary;
