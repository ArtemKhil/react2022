import React from 'react';
import {Outlet} from "react-router-dom";

import {Comments} from "../components";

function CommentsPage() {
    return (
        <div>
            <Outlet/>
            <Comments/>
        </div>
    );
}

export {CommentsPage};