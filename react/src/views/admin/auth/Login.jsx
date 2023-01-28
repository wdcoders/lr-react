import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../contexts/ContextProvider";

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const { setUser, setToken } = useStateContext();

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(loginData);

        axiosClient
            .post("/login", loginData)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                console.log(response);
            });
    };

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setLoginData({ ...loginData, [name]: value });
    };

    return (
        <>
            <h2 className="block-h2">Welcome</h2>
            <p>Login into your account.</p>
            <div className="divider"></div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleInput}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        name="password"
                        onChange={handleInput}
                    />
                </div>

                <div className="mb-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            id="remember"
                        />

                        <label className="form-check-label" htmlFor="remember">
                            Remember Me
                        </label>
                    </div>
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>

                    <span className="d-flex">
                        Don't have account?
                        <Link to="/admin/register">Register</Link>
                    </span>
                </div>
            </form>
        </>
    );
};

export default Login;
