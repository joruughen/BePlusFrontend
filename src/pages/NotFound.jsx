
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Oops! The page you are looking for does not exist.
                </p>
                <Link to="/">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
                        Go to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};
