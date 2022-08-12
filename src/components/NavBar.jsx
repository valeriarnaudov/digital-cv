import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function NavBar() {
    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Digital CV</h1>
            {user?.displayName ? (
                <button onClick={handleSignOut}>Sign Out</button>
            ) : (
                <Link to={"/signin"}> Sign In </Link>
            )}
        </div>
    );
}

export default NavBar;
