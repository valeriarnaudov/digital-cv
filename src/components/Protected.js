import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Protected({ children }) {
    const { user } = UserAuth();
    const { uid } = useParams();

    if (!user || user.uid !== uid) {
        <Navigate to={"/"}/>
    }

    return children;
}

export default Protected;
