import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
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
    AuthTitle,
    GlassGoogleBtn
} from "../styles/SignInElements";
import { FcGoogle } from "react-icons/fc";
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
                        <FeatureItem>Custom, elegant URL slugs (e.g. /user)</FeatureItem>
                        <FeatureItem>Premium, interactive glassmorphic design</FeatureItem>
                        <FeatureItem>Direct export to perfectly formatted PDFs</FeatureItem>
                        <FeatureItem>One-click seamless social sharing to recruiters</FeatureItem>
                    </FeatureList>
                </HeroSection>
                <AuthSection>
                    <AuthTitle>Get Started Free</AuthTitle>
                    <GlassGoogleBtn onClick={handleGoogleSignIn}>
                        <FcGoogle size={24} />
                        Sign in with Google
                    </GlassGoogleBtn>
                </AuthSection>
            </GlassCard>
        </PageWrapper>
    );
}

export default SignIn;
