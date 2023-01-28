import React from "react";

const Dashboard = () => {
    return (
        <>
            <div className="be-page-header">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">
                            <a href="#">DataTable</a>
                        </li>
                    </ol>
                </nav>
                <div className="be-page-header-controls">
                    <button type="button" className="btn btn-secondary">
                        Back
                    </button>
                    <button type="button" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </div>

            <div className="be-page-body">
                <div className="be-panel">
                    <div className="be-panel-header"></div>
                    <div className="be-panel-body">
                        <h5>Buttons</h5>
                        <div className="mb-3">
                            <button type="button" className="btn btn-primary">
                                Primary
                            </button>
                            <button type="button" className="btn btn-secondary">
                                Secondary
                            </button>
                            <button type="button" className="btn btn-success">
                                Success
                            </button>
                            <button type="button" className="btn btn-danger">
                                Danger
                            </button>
                            <button type="button" className="btn btn-warning">
                                Warning
                            </button>
                            <button type="button" className="btn btn-info">
                                Info
                            </button>
                            <button type="button" className="btn btn-light">
                                Light
                            </button>
                            <button type="button" className="btn btn-dark">
                                Dark
                            </button>
                        </div>
                        <h5>Alerts</h5>
                        <div>
                            <button
                                type="button"
                                id="toastr_success"
                                className="btn btn-success"
                            >
                                Success
                            </button>
                            <button
                                type="button"
                                id="toastr_warning"
                                className="btn btn-warning"
                            >
                                Warning
                            </button>
                            <button
                                type="button"
                                id="toastr_danger"
                                className="btn btn-danger"
                            >
                                Error
                            </button>
                            <button
                                type="button"
                                id="swal_confirm"
                                className="btn btn-secondary"
                            >
                                Confirm
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Modal
                            </button>
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown button
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="shades">
                            <div className="shades-inner shade-100"></div>
                            <div className="shades-inner shade-200"></div>
                            <div className="shades-inner shade-300"></div>
                            <div className="shades-inner shade-400"></div>
                            <div className="shades-inner shade-500"></div>
                            <div className="shades-inner shade-600"></div>
                            <div className="shades-inner shade-700"></div>
                            <div className="shades-inner shade-800"></div>
                            <div className="shades-inner shade-900"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
