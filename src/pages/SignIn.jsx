import React, { useState } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
    PageWrapper,
    GlassCard,
    HeroSection,
    WelcomeText,
    SubTitle,
    FeatureList,
    FeatureItem,
    AuthSection,
    AuthTitle
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
            navigate(`/account`);
        }

        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    if (loading) {
        return <Loading />;
    }

    return (
        <PageWrapper>
            <GlassCard>
                <HeroSection>
                    <WelcomeText>Elevate Your<br/>Professional Identity.</WelcomeText>
                    <SubTitle>
                        Build a captivating digital portfolio in seconds. 
                        Secure your custom URL and stand out to top recruiters instantly.
                    </SubTitle>
                    <FeatureList>
                        <FeatureItem>Custom, elegant URL slugs (e.g. /valeri)</FeatureItem>
                        <FeatureItem>Premium, interactive glassmorphic design</FeatureItem>
                        <FeatureItem>Direct export to perfectly formatted PDFs</FeatureItem>
                        <FeatureItem>One-click seamless social sharing to recruiters</FeatureItem>
                    </FeatureList>
                </HeroSection>
                <AuthSection>
                    <AuthTitle>Get Started Free</AuthTitle>
                    <GoogleButton onClick={handleGoogleSignIn} />
                </AuthSection>
            </GlassCard>
        </PageWrapper>
    );
}

export default SignIn;
