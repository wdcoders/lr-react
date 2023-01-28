import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../contexts/ContextProvider";

const Login = () => {
    const loginFormValidation = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required!"),
        password: Yup.string().required("Password is required!"),
    });

    const { setUser, setToken } = useStateContext();

    const loginForm = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginFormValidation,
        onSubmit: (values) => {
            axiosClient
                .post("/login", values)
                .then(({ data }) => {
                    setUser(data.user);
                    setToken(data.token);
                })
                .catch((err) => {
                    const response = err.response;
                    console.log(response);
                });
        },
    });

    return (
        <>
            <h2 className="block-h2">Welcome</h2>
            <p>Login into your account.</p>
            <div className="divider"></div>
            <form onSubmit={loginForm.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email Address <span>*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email Address"
                        value={loginForm.values.email}
                        onChange={loginForm.handleChange}
                    />
                    {loginForm.errors.email && loginForm.touched ? (
                        <span className="invalid-feedback" role="alert">
                            {loginForm.errors.email}
                        </span>
                    ) : (
                        ""
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password <span>*</span>
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        name="password"
                        value={loginForm.values.password}
                        onChange={loginForm.handleChange}
                    />
                    {loginForm.errors.password && loginForm.touched ? (
                        <span className="invalid-feedback" role="alert">
                            {loginForm.errors.password}
                        </span>
                    ) : (
                        ""
                    )}
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
