import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Account() {
    const [isOwner, setIsOwner] = useState(false);

    const { uid } = useParams();
    const { user } = UserAuth();

    useEffect(() => {
        if (user) {
            setIsOwner(user.uid === uid);
        }
    }, [user, uid]);

    return (
        <div>
            <h1>Account</h1>
        </div>
    );
}

export default Account;
