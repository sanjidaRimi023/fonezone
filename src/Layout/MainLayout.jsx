import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-140px)]'>
        <div className='container mx-auto'>
        <Outlet></Outlet>
        </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default MainLayout;