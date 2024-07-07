
import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
                    Welcome to Our Application
                </h1>
                <p className="text-center text-gray-600 mb-6">
                    Please sign in or create an account to continue.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link to="/auth/login">
                        <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
                            Login
                        </button>
                    </Link>
                    <Link to="/auth/register">
                        <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
