import {Button} from "../components/Button.jsx";


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