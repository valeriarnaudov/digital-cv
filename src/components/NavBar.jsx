import React from "react";
import { toast } from "react-toastify";
import { UserAuth } from "../context/AuthContext";
import { H1, Nav, SignOutBtn } from "../styles/NavBarEelements";

function NavBar() {
    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            toast.error("Error signing out");
        }
    };

    return (
        <>
            <Nav>
                <H1>{user?.displayName} Digital CV</H1>
                {user?.displayName && <SignOutBtn onClick={handleSignOut}>Sign Out</SignOutBtn>}
            </Nav>
        </>
    );
}

export default NavBar;
