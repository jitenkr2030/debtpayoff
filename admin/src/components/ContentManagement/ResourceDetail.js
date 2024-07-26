import React, { useState, useEffect } from 'react';
import adminService from '../../services/adminService';

const ResourceDetail = ({ resourceId }) => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        adminService.getResource(resourceId).then(setResource);
    }, [resourceId]);

    if (!resource) return <div>Loading...</div>;

    return (
        <div>
            <h2>{resource.title}</h2>
            <p>{resource.content}</p>
        </div>
    );
};

export default ResourceDetail;
