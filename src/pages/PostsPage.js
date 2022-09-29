import React from 'react';
import {Outlet} from "react-router-dom";

import {Posts} from "../components";

function PostsPage() {
    return (
        <div>
            <Outlet/>
            <Posts/>
        </div>
    );
}

export {PostsPage};