import React, {useEffect, useState} from 'react';

import {usersService} from "../../services";
import {User} from "../user/User";

function Users() {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, []);


    return (

        <div>
            {
                users.map((user, index) => <User key={index} user={user}/>)
            }
        </div>
    );
}

export {Users};