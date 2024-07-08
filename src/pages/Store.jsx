import React, { useEffect, useState } from 'react';
import { getallaccesories, buyAccessory } from '../services/rockie.js'; // Ajusta la ruta según tu estructura de archivos

export const Store = () => {
    const [accessories, setAccessories] = useState([]);

    useEffect(() => {
        const fetchAccessories = async () => {
            try {
                const response = await getallaccesories();
                setAccessories(response.data); // Asumiendo que los datos están en response.data
            } catch (error) {
                console.error('Error fetching accessories:', error);
            }
        };

        fetchAccessories();
    }, []);

    const handleBuy = async (accessoryName) => {
        try {
            const response = await buyAccessory(accessoryName);
            if (response.status === 200) {
                alert(`Compraste el accesorio: ${accessoryName}`);
            }
        } catch (error) {
            console.error('Error buying accessory:', error);
            alert('Error comprando el accesorio');
        }
    };

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                {accessories.length > 0 ? (
                    <ul>
                        {accessories.map((accessory, index) => (
                            <li key={index}>
                                <div>
                                    <strong>{accessory.name}</strong>
                                </div>
                                <div>{accessory.description}</div>
                                <div>Price: {accessory.price}</div>
                                <div>
                                    <button
                                        onClick={() => handleBuy(accessory.name)}
                                        className="mt-2 p-2 bg-green-500 text-white rounded"
                                    >
                                        Comprar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};
