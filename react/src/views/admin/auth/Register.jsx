import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../contexts/ContextProvider";

const Register = () => {
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { setUser, setToken } = useStateContext();

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(registerData);

        axiosClient
            .post("/register", registerData)
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

        setRegisterData({ ...registerData, [name]: value });
    };

    return (
        <>
            <h2 className="block-h2">Welcome</h2>
            <p>Register your account.</p>
            <div className="divider"></div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Your Name
                    </label>
                    <input
                        id="name"
                        type="name"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        onChange={handleInput}
                    />
                </div>
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

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>

                    <span className="d-flex">
                        Already have account?
                        <Link to="/admin/login">Login</Link>
                    </span>
                </div>
            </form>
        </>
    );
};

export default Register;
