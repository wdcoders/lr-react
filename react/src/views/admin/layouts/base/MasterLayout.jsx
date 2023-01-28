import React from "react";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../../../contexts/ContextProvider";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MasterLayout = () => {
    const { user, token } = useStateContext();

    if (!token) {
        console.log(token);
        return <Navigate to="/admin/login" />;
    }

    return (
        <div className="be-wrapper" id="beWrapper">
            <Sidebar />

            <div className="be-wrapper-right">
                <Navbar />

                {/*  wrapper content start */}
                <div className="be-wrapper-content">
                    <Outlet />
                </div>
                {/* wrapper content end */}
            </div>
            {/* wrapper right end */}
        </div>
    );
};

export default MasterLayout;
