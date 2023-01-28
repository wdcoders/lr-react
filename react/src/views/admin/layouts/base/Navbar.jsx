import React, { useState } from "react";

const Navbar = ({ onLogout }) => {
    const { isUserDropdown, setUserDropdown } = useState(false);

    const onUserDropdown = () => {
        setUserDropdown(!isUserDropdown);
    };

    return (
        <header className="be-header">
            <div className="be-header-bar" id="beHeaderBar">
                <i className="ri-menu-line"></i>
            </div>
            <div className="be-header-navbar">
                {/* <!-- USER CONTROL --> */}
                <div className="dropdown user-dropdown">
                    <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i className="uil uil-user-circle"></i>
                    </button>
                    <ul
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <li>
                            <a className="dropdown-item" href="profile.php">
                                <i className="uil uil-user"></i> My Profile
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                <i className="uil uil-envelope"></i> Messages
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                <i className="uil uil-setting"></i> Settings
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" onClick={onLogout}>
                                <i className="uil uil-power"></i> Logout
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <!-- USER CONTROL --> */}
            </div>
        </header>
    );
};

export default Navbar;
