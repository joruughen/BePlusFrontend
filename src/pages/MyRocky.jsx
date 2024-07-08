// src/pages/MyRocky.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyRocky = () => {
    const [rocky, setRocky] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [updateInfo, setUpdateInfo] = useState({
        name: '',
        age: ''
    });

    useEffect(() => {
        fetchRockyInfo();
    }, []);

    const fetchRockyInfo = async () => {
        try {
            const response = await axios.get('/rockie/info');
            setRocky(response.data);
            setLoading(false);
        } catch (error) {
            setError('Error fetching Rocky information');
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateInfo({
            ...updateInfo,
            [name]: value
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.patch('/rockie/update', updateInfo);
            fetchRockyInfo();
        } catch (error) {
            setError('Error updating Rocky information');
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
            <h2>My Rocky</h2>
            {rocky && (
                <div>
                    <p>Name: {rocky.name}</p>
                    <p>Age: {rocky.age}</p>
                </div>
            )}
            <h3>Update Rocky Info</h3>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={updateInfo.name}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Age:
                        <input
                            type="text"
                            name="age"
                            value={updateInfo.age}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default MyRocky;
