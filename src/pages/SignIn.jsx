import React, { useState } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
    DescriptionContainer,
    DescriptionText,
    Only,
    SignInContainer,
    SignInText,
    WelcomeContainer,
    WelcomeText,
} from "../styles/SignInElements";
import Loading from "../components/Loading";

function SignIn() {
    const [loading, setLoading] = useState(true);

    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            navigate("/");
            toast.success("You have signed in successfully.");
        } catch (error) {
            toast.error("Something went wrong while logging in.");
        }
    };

    useEffect(() => {
        if (user !== null) {
            navigate(`/account/${user.uid}`);
        }

        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <SignInContainer>
                <WelcomeContainer>
                    <WelcomeText>
                        Welcome to <br />
                        Digital CV
                    </WelcomeText>
                    <DescriptionContainer>
                        <DescriptionText>
                            This is a digital CV. <br /> <br /> You can create
                            and share your CV.
                        </DescriptionText>
                        <DescriptionText>
                            CREATE, <br /> EDIT, <br /> ADD, <br /> DELETE
                            <br /> <Only>Only you!</Only>
                        </DescriptionText>
                    </DescriptionContainer>
                </WelcomeContainer>
                <SignInText>Sign in with Google to start</SignInText>
                <GoogleButton onClick={handleGoogleSignIn} />
            </SignInContainer>
        </>
    );
}

export default SignIn;
