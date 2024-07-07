import React from 'react';
import LogInForm from '../components/LogInForm.jsx';

export const Login = () => {
    return (

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <LogInForm />
                </div>
            </div>

    );
};
