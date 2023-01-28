import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
    Link,
    Navigate,
    redirect,
    useNavigate,
    useParams,
} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosClient from "../../../axios-client";
import { update } from "lodash";

const UserUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const updateFormValidation = Yup.object().shape({
        name: Yup.string().required("Name is required!"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required!"),
    });

    const updateForm = useFormik({
        initialValues: {
            id: "",
            name: "",
            email: "",
        },
        validationSchema: updateFormValidation,
        onSubmit: (values) => {
            axiosClient
                .put(`/users/${id}`, values)
                .then(({ data }) => {
                    navigate("/admin/users");
                })
                .catch((err) => {
                    const response = err.response;
                    console.log(response);
                });
        },
    });

    useEffect(() => {
        getUser(id);
    }, []);

    const getUser = (id) => {
        axiosClient.get(`/users/${id}`).then(({ data }) => {
            console.log(data);

            updateForm.setValues(data.data);
        });
    };

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
                            <a href="#">Update User</a>
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
                    <div className="be-panel-header">Update User</div>
                    <div className="be-panel-body">
                        <div className="row">
                            <div className="col-lg-4">
                                <form onSubmit={updateForm.handleSubmit}>
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
                                            value={updateForm.values.name}
                                            onChange={updateForm.handleChange}
                                        />
                                        {updateForm.errors.name &&
                                        updateForm.touched ? (
                                            <span
                                                className="invalid-feedback"
                                                role="alert"
                                            >
                                                {updateForm.errors.name}
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
                                            value={updateForm.values.email}
                                            onChange={updateForm.handleChange}
                                        />
                                        {updateForm.errors.email &&
                                        updateForm.touched ? (
                                            <span
                                                className="invalid-feedback"
                                                role="alert"
                                            >
                                                {updateForm.errors.email}
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                    </div>

                                    {/* <div className="mb-3">
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
                                            value={updateForm.values.password}
                                            onChange={updateForm.handleChange}
                                        />
                                        {updateForm.errors.password &&
                                        updateForm.touched ? (
                                            <span
                                                className="invalid-feedback"
                                                role="alert"
                                            >
                                                {updateForm.errors.password}
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                    </div> */}

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

export default UserUpdate;
