import React from 'react';
import {Outlet} from "react-router-dom";

import {Headers} from "../components";


function MainLayout() {
    return (
        <div>

            <Headers/>
            <hr/>
            <Outlet/>

        </div>
    );
}

export {MainLayout};