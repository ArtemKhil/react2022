import React from 'react';

import {Posts} from "../components";
import {Outlet} from "react-router-dom";

function PostPage() {
    return (
        <div>
            <Outlet/>
            <Posts/>
        </div>
    );
}

export {PostPage};