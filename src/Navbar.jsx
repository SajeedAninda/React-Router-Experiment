import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='py-5 px-10 shadow-lg flex justify-between items-center'>
            <div>
                <h1 className='text-2xl font-bold'>Router Experiment</h1>
            </div>
            <div className='flex gap-4 text-xl font-bold'>
                <NavLink
                    to={`/`}
                    className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline" : ""}>
                    Home
                </NavLink>
                <NavLink
                    to={`/products`}
                    className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline" : ""}>
                    Products
                </NavLink>
                <NavLink
                    to={`/dashboard`}
                    className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline" : ""}>
                    Dashboard
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;