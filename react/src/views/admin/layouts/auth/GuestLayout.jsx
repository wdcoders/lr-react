import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../../../contexts/ContextProvider";

const GuestLayout = () => {
    const { user, token } = useStateContext();

    if (token) {
        console.log(token);
        return <Navigate to="/admin/dashboard" />;
    }

    return (
        <div className="be-auth-wrapper">
            <div className="be-auth-wrapper-inner">
                <Outlet />
            </div>
        </div>
    );
};

export default GuestLayout;
