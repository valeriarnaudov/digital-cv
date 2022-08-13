import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserAuth } from "../context/AuthContext";
import { H1, Nav, SignBtn, SignOutBtn } from "../styles/NavBarEelements";

function NavBar() {
    const { user, logOut } = UserAuth();

    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await logOut();
            navigate("/");
            toast.success("You have been signed out");
        } catch (error) {
            toast.error("Error signing out");
        }
    };

    return (
        <>
            <Nav>
                <H1>{user?.displayName} Digital CV</H1>
                {user?.displayName ? (
                    <SignOutBtn onClick={handleSignOut}>
                        Sign Out
                    </SignOutBtn>
                ) : (
                    <SignBtn to="/">Sign In</SignBtn>
                )}
            </Nav>
        </>
    );
}

export default NavBar;
