import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PersonalDataForm from "../components/PersonalDataForm";
import { UserAuth } from "../context/AuthContext";
import { getData } from "../services/dataServices";

function Account() {
    const [isOwner, setIsOwner] = useState(false);
    const [data, setData] = useState(null);
    const [isNewUser, setIsNewUser] = useState(false);

    const { uid } = useParams();
    const { user } = UserAuth();

    const navigate = useNavigate();

    useEffect(() => {
        const getUserData = async () => {
            await getData(uid, setData)
        }

        getUserData();
    }, [user, uid]);

    useEffect(() => {
        if (user !== null) {
            setIsOwner(user.uid === uid);
        }
        if (!data && user) {
            setIsNewUser(true);
        } else {
            setIsNewUser(false);
        }
    }, [data, user, uid]);

    if (isNewUser) {
        return <PersonalDataForm setData={setData} user={user} data={data} />;
    }


    return (
        <>
            <h1>Hello</h1>
        </>
    );
}

export default Account;
