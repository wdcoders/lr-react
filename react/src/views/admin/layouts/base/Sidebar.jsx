import React from "react";
import { Link, Navigate } from "react-router-dom";

const Sidebar = ({ user }) => {
    return (
        <aside className="be-sidebar" id="beSidebar">
            <div className="be-sidebar-header">
                <h4>HELMER</h4>
                <div className="be-sidebar-close" id="beSidebarClose">
                    <i className="uil uil-times"></i>
                </div>
            </div>
            <div className="be-sidebar-auth">
                <div className="be-sidebar-profile">
                    <img src="" alt="" />
                </div>
                <div className="be-sidebar-name">
                    <h4>{user.name}</h4>
                    <small>WEB DEVELOPER</small>
                </div>
            </div>
            <div className="be-sidebar-navbar">
                <ul className="be-sidebar-navbar-nav">
                    <li className="be-sidebar-nav-item">MENU</li>
                    <li>
                        <Link to="dashboard" className="be-sidebar-nav-link">
                            <div className="be-sidebar-nav-text">
                                <i className="uil uil-estate be-sidebar-nav-icon"></i>
                                <span>Dashboard</span>
                            </div>
                            {/* <!-- <span className="be-sidebar-nav-arrow"></span> --> */}
                        </Link>
                    </li>
                    <li>
                        <Link to="users" className="be-sidebar-nav-link">
                            <div className="be-sidebar-nav-text">
                                <i className="uil uil-users-alt be-sidebar-nav-icon"></i>
                                <span>Users</span>
                            </div>
                            {/* <!-- <span className="uil uil-angle-up be-sidebar-nav-arrow"></span> --> */}
                        </Link>
                    </li>
                    <li>
                        <a href="" className="be-sidebar-nav-link">
                            <div className="be-sidebar-nav-text">
                                <i className="uil uil-apps be-sidebar-nav-icon"></i>
                                <span>Category</span>
                            </div>
                            {/* <!-- <span className="uil uil-angle-up be-sidebar-nav-arrow"></span> --> */}
                        </a>
                    </li>
                    <li>
                        <a href="" className="be-sidebar-nav-link">
                            <div className="be-sidebar-nav-text">
                                <i className="uil uil-newspaper be-sidebar-nav-icon"></i>
                                <span>Article</span>
                            </div>
                            {/* <!-- <span className="uil uil-angle-up be-sidebar-nav-arrow"></span> --> */}
                        </a>
                    </li>
                    <li className="be-sidebar-nav-item">SETTINGS</li>
                    <li>
                        <a
                            href=""
                            className="be-sidebar-nav-link be-sidebar-toggle"
                        >
                            <div className="be-sidebar-nav-text">
                                <i className="uil uil-comment be-sidebar-nav-icon"></i>
                                <span>Additional Pages</span>
                            </div>
                            <span className="uil uil-angle-right-b be-sidebar-nav-arrow"></span>
                        </a>
                        <ul className="be-sidebar-menu">
                            <li>
                                <a href="">Submenu 1</a>
                            </li>
                            <li>
                                <a href="">Submenu 2</a>
                            </li>
                            <li>
                                <a href="">Submenu 3</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
