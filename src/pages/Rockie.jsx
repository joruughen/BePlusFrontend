import React, { useEffect, useState } from 'react';
import secureStorage from '../../secureStorage.js';
import { fetchRockie, fetchRockieUpdate } from '../services/rockie.js';
import rockieImage from '../assets/Rockie.png';
import {useNavigate} from "react-router-dom";



export const Rockie = () => {
    const [role, setRole] = useState({
        name: 'Default Name',
        face: '',
        accessory: '',
        upper_accessory: '',
        lower_accessory: ''
    });

    const navigate = useNavigate();


    const [infoRockie, setInfoRockie] = useState(null);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        // Recuperar y descifrar el token del almacenamiento seguro
        const storedToken = secureStorage.getItem('token');
        if (storedToken) {
            setRole(storedToken);

            // Llamar a fetchRockie con el token
            const fetchData = async () => {
                try {
                    const response = await fetchRockie({}, storedToken); // Pasar el token en la solicitud
                    setInfoRockie(response.data); // Almacenar los datos de la respuesta
                } catch (error) {
                    console.error('Error fetching Rockie info:', error);
                }
            };

            fetchData();
        } else {
            console.log("No token found in secure storage.");
        }
    }, []);

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const redirectToStore = () => {
        navigate('/store');
    };

    const updateName = async () => {
        if (infoRockie) {
            try {
                // Crear una copia actualizada de infoRockie con el nuevo nombre
                const updatedRockie = { ...infoRockie, name: newName };
                setInfoRockie(updatedRockie);
                setNewName('');

                // Enviar la actualización a la API
                const response = await fetchRockieUpdate(updatedRockie);
                if (response.status === 200) {
                    // Supongamos que la respuesta de la API devuelve un token
                    console.log(updatedRockie);
                }
            } catch (error) {
                console.error("Error updating Rockie info:", error);
            }
        }
    };

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                {infoRockie ? (
                    <div>
                        <div><strong>Name:</strong> {infoRockie.name}</div>
                        <div>
                            <img src={rockieImage} alt="Foto"/>
                        </div>
                        <div><strong>Level:</strong> {infoRockie.level}</div>
                        <div>
                            <input
                                type="text"
                                value={newName}
                                onChange={handleNameChange}
                                placeholder="Enter new name"
                                className="mt-4 p-2 border rounded"
                            />
                            <button
                                onClick={updateName}
                                className="ml-2 p-2 bg-blue-500 text-white rounded"
                            >
                                Update Name
                            </button>
                        </div>

                    </div>

                ) : (
                    <div>Loading...</div>
                )}

            </div>
            <button
                onClick={redirectToStore}
                className="mt-4 p-2 bg-green-500 text-white rounded"
            >
                Comprar accesorios
            </button>
        </div>
    );
};
