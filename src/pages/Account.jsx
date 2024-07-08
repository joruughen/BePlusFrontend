// src/pages/Account.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Account = () => {
    const [account, setAccount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAccountInfo();
    }, []);

    const fetchAccountInfo = async () => {
        try {
            const response = await axios.get('/account/info');
            setAccount(response.data);
            setLoading(false);
        } catch (error) {
            setError('Error fetching account information');
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Account Information</h2>
            {account && (
                <div>
                    <p><strong>Name:</strong> {account.name}</p>
                    <p><strong>Email:</strong> {account.email}</p>
                    <p><strong>Role:</strong> {account.role}</p>
                    {/* Add other account fields as necessary */}
                </div>
            )}
        </div>
    );
};

export default Account;
