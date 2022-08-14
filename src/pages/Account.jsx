import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import PersonalDataForm from "../components/PersonalDataForm";
import { UserAuth } from "../context/AuthContext";
import { getData } from "../services/dataServices";

function Account() {
    const [isOwner, setIsOwner] = useState(false);
    const [data, setData] = useState(null);
    const [isNewUser, setIsNewUser] = useState(false);
    const [loading, setLoading] = useState(true);

    const { uid } = useParams();
    const { user } = UserAuth();

    const navigate = useNavigate();

    useEffect(() => {
        const getUserData = async () => {
            await getData(uid, setData);
            setLoading(false);
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

    if (loading) {
        return <Loading />
    }

    console.log(data)


    return (
        <>
            <h1>Hello</h1>
            <h1>{data.user}</h1>
        </>
    );
}

export default Account;
