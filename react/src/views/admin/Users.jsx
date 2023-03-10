import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axiosClient from "../../axios-client";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        axiosClient.get("/users").then(({ data }) => {
            console.log(data.data);
            setUsers(data.data);
        });
    };

    const onDelete = (u) => {
        if (!window.confirm("Are you sure, you want to delete this user?")) {
            return;
        }

        axiosClient.delete(`/users/${u.id}`).then(({ data }) => {
            getUsers();
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
                        <li className="breadcrumb-item active">
                            <a href="#">Manage Users</a>
                        </li>
                    </ol>
                </nav>
                <div className="be-page-header-controls">
                    <button type="button" className="btn btn-primary">
                        Add User
                    </button>
                </div>
            </div>

            <div className="be-page-body">
                <div className="be-panel">
                    <div className="be-panel-header">Manage Users</div>
                    <div className="be-panel-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Created At</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users.map((d) => (
                                        <tr key={d.id}>
                                            <td>{d.id}</td>
                                            <td>{d.name}</td>
                                            <td>{d.email}</td>
                                            <td>{d.created_at}</td>
                                            <td>
                                                <button className="btn btn-sm btn-success">
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-danger ms-2"
                                                    onClick={() => onDelete(d)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5}>Data Not Found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Users;
