import React, { useEffect, useState } from 'react';
import secureStorage from '../../secureStorage.js';

export const Rockie = () => {
    const [role, setRole] = useState('');

    useEffect(() => {
        // Recuperar y descifrar el role del almacenamiento seguro
        const storedRole = secureStorage.getItem('token');
        if (storedRole) {
            setRole(storedRole);
        }
    }, []);

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                HOLA SOY EL PUTO ROCKIE
                <div>Role: {role}</div>
            </div>
        </div>
    );
};
