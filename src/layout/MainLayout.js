import React from 'react';
import {Outlet} from "react-router-dom";

import {Header, SearchbarForm} from "../components";


function MainLayout() {

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}

export {MainLayout};