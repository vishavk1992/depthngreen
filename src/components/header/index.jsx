import React from 'react'
import './styles.scss'
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
const Header = () => {

    const [sticky, setSticky] = useState("");
    const pathName = location.pathname;

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 10 ? "is-sticky" : "";
        setSticky(stickyClass);
    };

    const classes = `page-navbar navbar bg-white py-0 navbar-expand-lg navbar-light ${sticky}`;
    return (
        <div className='header-content'>
            <header>
                <div className='text-center top-nav-alert bg-secondary-clr py-3 text-white'>
                    <p>
                        NOW OPEN in CAMBRIDGE, MA! Order Online for Quick & Easy Pickup!
                    </p>
                </div>
                <nav className={classes}>
                    <div className='container-fluid w-full flex flex-wrap items-center  justify-between px-6 '>
                        <a to="/" className="text-xl pr-2">
                            <img src='/static/logo192.png' alt="Depth 'N Green" className="h-20" />
                        </a>
                        <div className=" navbar-collapse items-center">
                            <ul className='navbar-nav flex flex-wrap list-style-none mx-auto '>
                                <li className="nav-item p-2">
                                    <Link
                                        to="/"
                                        className={`nav-link nav-menu ${pathName === "/" ? "active" : ""
                                            }`}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item p-2">
                                    <Link
                                        to="/cafe"
                                        className={`nav-link nav-menu ${pathName === "cafe" ? "active" : ""
                                            }`}
                                    >
                                        Cafe
                                    </Link>
                                </li>
                                <li className="nav-item p-2">
                                    <Link
                                        to="/catering"
                                        className={`nav-link nav-menu ${pathName === "/catering" ||
                                            pathName.includes("/catering")
                                            ? "active"
                                            : ""
                                            }`}
                                    >
                                        Catering
                                    </Link>
                                </li>
                                <li className="nav-item p-2">
                                    <Link
                                        to="/products"
                                        className={`nav-link nav-menu ${pathName === "/products" ||
                                            pathName.includes("/product")
                                            ? "active"
                                            : ""
                                            }`}
                                    >
                                        Products
                                    </Link>
                                </li>
                                <li className="nav-item p-2">
                                    <Link
                                        to="/about"
                                        className={`nav-link nav-menu ${pathName === "/about" ? "active" : ""
                                            }`}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item p-2">
                                    <Link
                                        to="/contact"
                                        className={`nav-link nav-menu ${pathName === "/contact" ? "active" : ""
                                            }`}
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span className="mr-2 font-bold">Cart</span>

                        </div>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default Header