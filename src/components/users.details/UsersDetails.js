import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {usersService} from "../../services";
import {UserDetails} from "../user.details/UserDetails";

function UsersDetails() {

    const {id} = useParams();

    const [userDetails,setUserDetails] = useState(null);

    useEffect(() => {
        usersService.getUserById(id).then(({data})=>setUserDetails(data))
    }, [id]);

    return (
        <div>
            {
                userDetails && (<UserDetails userDetails={userDetails}/>)
            }
        </div>
    );
}

export {UsersDetails};