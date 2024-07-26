import React, { useState, useEffect } from 'react';
import adminService from '../../services/adminService';

const SecuritySettings = () => {
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        adminService.getSecuritySettings().then(setSettings);
    }, []);

    const updateSetting = (key, value) => {
        adminService.updateSecuritySettings({ [key]: value }).then(updatedSettings => {
            setSettings(updatedSettings);
        });
    };

    if (!settings) return <div>Loading...</div>;

    return (
        <div>
            <h2>Security Settings</h2>
            <div>
                <label>
                    Enable 2FA:
                    <input
                        type="checkbox"
                        checked={settings.enable2FA}
                        onChange={e => updateSetting('enable2FA', e.target.checked)}
                    />
                </label>
            </div>
        </div>
    );
};

export default SecuritySettings;
