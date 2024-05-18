import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Common/Footer/Footer';
import Header from './Common/Header/Header';


function DefaultLayout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default DefaultLayout;
