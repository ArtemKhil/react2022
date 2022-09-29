import React from 'react';
import {Outlet} from "react-router-dom";

import {Users} from "../components";


function UsersPage() {
    return (
        <div>
            <Outlet/>
            <Users/>
        </div>
    );
}

export {UsersPage};