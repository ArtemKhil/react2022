import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../user/User";



function Users() {



    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll.then(({data}) => {
            setUsers(data)});
    }, []);


    return (

        <div>
            {
                users.map((user,index)=>(<User key={index} user={user}/>))
            }

        </div>
    );
}

export {Users};
