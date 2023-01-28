import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axiosClient from "../../../../axios-client";
import { useStateContext } from "../../../../contexts/ContextProvider";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MasterLayout = () => {
    const { user, token, setUser, setToken } = useStateContext();

    if (!token) {
        return <Navigate to="/admin/login" />;
    }

    const onLogout = (e) => {
        e.preventDefault();

        axiosClient.post("/logout").then(() => {
            setUser({});
            setToken(null);
            return <Navigate to="/admin/login" />;
        });
    };

    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
    }, []);

    return (
        <div className="be-wrapper" id="beWrapper">
            <Sidebar user={user} />

            <div className="be-wrapper-right">
                <Navbar onLogout={onLogout} />

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
