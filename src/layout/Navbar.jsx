import React from 'react';
import { Button } from '../components/Button.jsx';


export const Navbar = () => {

    return (
        <div className="bg-c1 columns-2">

            <div className="p-4">
                <div className="text-white">
                    Be+
                </div>
            </div>
            <div className="bg-c2 p-4">
                <div>
                    <Button message="Home" to="/home" textcolor="text-white"/>
                    <Button message="Login" to="/auth/login" textcolor="text-white"/>
                    <Button message="Register" to="/auth/register" textcolor="text-white"/>
                </div>
            </div>
        </div>
    )
};


export const Navbar2 = () => {
    return (
        <nav className="bg-blue-800 text-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                            <div className="text-2xl font-bold">Be+</div>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Button message="Home" to="/home" textcolor="text-white" />
                                <Button message="Login" to="/auth/login" textcolor="text-white" />
                                <Button message="Register" to="/auth/register" textcolor="text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
