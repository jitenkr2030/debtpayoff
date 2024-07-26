const apiUrl = '/api/admin';

const adminService = {
    getUsers: async () => {
        const response = await fetch(`${apiUrl}/users`);
        return response.json();
    },
    getUser: async (id) => {
        const response = await fetch(`${apiUrl}/users/${id}`);
        return response.json();
    },
    getResources: async () => {
        const response = await fetch(`${apiUrl}/resources`);
        return response.json();
    },
    getResource: async (id) => {
        const response = await fetch(`${apiUrl}/resources/${id}`);
        return response.json();
    },
    getUsageMetrics: async () => {
        const response = await fetch(`${apiUrl}/usage-metrics`);
        return response.json();
    },
    getFinancialStatistics: async () => {
        const response = await fetch(`${apiUrl}/financial-statistics`);
        return response.json();
    },
    getFeatureToggles: async () => {
        const response = await fetch(`${apiUrl}/feature-toggles`);
        return response.json();
    },
    toggleFeature: async (id) => {
        const response = await fetch(`${apiUrl}/feature-toggles/${id}/toggle`, {
            method: 'POST'
        });
        return response.json();
    },
    getSecuritySettings: async () => {
        const response = await fetch(`${apiUrl}/security-settings`);
        return response.json();
    },
    updateSecuritySettings: async (settings) => {
        const response = await fetch(`${apiUrl}/security-settings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(settings)
        });
        return response.json();
    },
    getCurrentUser: async () => {
        const response = await fetch(`${apiUrl}/me`);
        return response.json();
    },
    login: async (credentials) => {
        const response = await fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        return response.json();
    },
    logout: async () => {
        await fetch(`${apiUrl}/logout`, { method: 'POST' });
    }
};

export default adminService;
