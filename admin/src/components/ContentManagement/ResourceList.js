import React, { useEffect, useState } from 'react';
import adminService from '../../services/adminService';

const ResourceList = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        adminService.getResources().then(setResources);
    }, []);

    return (
        <div>
            <h2>Resource List</h2>
            <ul>
                {resources.map(resource => (
                    <li key={resource.id}>{resource.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceList;
