import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosClient from "../../../axios-client";

const UserCreate = () => {
    const navigate = useNavigate();
    const createFormValidation = Yup.object().shape({
        name: Yup.string().required("Name is required!"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required!"),
        password: Yup.string().required("Password is required!"),
    });

    const createForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: createFormValidation,
        onSubmit: (values) => {
            axiosClient
                .post("/users", values)
                .then(({ data }) => {
                    navigate("/admin/users");
                })
                .catch((err) => {
                    const response = err.response;
                    console.log(response);
                });
        },
    });

    return (
        <>
            <div className="be-page-header">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Users</a>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/admin/users">Manage Users</Link>
                        </li>
                        <li className="breadcrumb-item active">
                            <a href="#">Create User</a>
                        </li>
                    </ol>
                </nav>
                <div className="be-page-header-controls">
                    {/* <button type="button" className="btn btn-primary">
                        Add User
                    </button> */}
                </div>
            </div>

            <div className="be-page-body">
                <div className="be-panel">
                    <div className="be-panel-header">Create User</div>
                    <div className="be-panel-body">
                        <div className="row">
                            <div className="col-lg-4">
                                <form onSubmit={createForm.handleSubmit}>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="form-label"
                                        >
                                            Name <span>*</span>
                                        </label>
                                        <input
                                            id="name"
                                            type="name"
                                            className="form-control"
                                            name="name"
                                            placeholder="Name"
                                            value={createForm.values.name}
                                            onChange={createForm.handleChange}
                                        />
                                        {createForm.errors.name &&
                                        createForm.touched ? (
                                            <span
                                                className="invalid-feedback"
                                                role="alert"
                                            >
                                                {createForm.errors.name}
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label
                                            htmlFor="email"
                                            className="form-label"
                                        >
                                            Email Address <span>*</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email Address"
                                            value={createForm.values.email}
                                            onChange={createForm.handleChange}
                                        />
                                        {createForm.errors.email &&
                                        createForm.touched ? (
                                            <span
                                                className="invalid-feedback"
                                                role="alert"
                                            >
                                                {createForm.errors.email}
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label
                                            htmlFor="password"
                                            className="form-label"
                                        >
                                            Password <span>*</span>
                                        </label>
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            className="form-control"
                                            name="password"
                                            value={createForm.values.password}
                                            onChange={createForm.handleChange}
                                        />
                                        {createForm.errors.password &&
                                        createForm.touched ? (
                                            <span
                                                className="invalid-feedback"
                                                role="alert"
                                            >
                                                {createForm.errors.password}
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                    </div>

                                    <div className="">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserCreate;
