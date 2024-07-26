import React, { useState, useEffect } from 'react';
import adminService from '../../services/adminService';

const FeatureToggles = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        adminService.getFeatureToggles().then(setFeatures);
    }, []);

    const toggleFeature = (feature) => {
        adminService.toggleFeature(feature.id).then(updatedFeature => {
            setFeatures(features.map(f => f.id === updatedFeature.id ? updatedFeature : f));
        });
    };

    return (
        <div>
            <h2>Feature Toggles</h2>
            <ul>
                {features.map(feature => (
                    <li key={feature.id}>
                        {feature.name}
                        <button onClick={() => toggleFeature(feature)}>
                            {feature.enabled ? 'Disable' : 'Enable'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeatureToggles;
