import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/user.service";
import User from "../user/User";

function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const showUser = (obj) => {
        setUser(obj)
    };

    useEffect(() => {
        getUsers().then(value => setUsers(value));
    }, []);

    return (

        <div>
            <div className={'header'}>
                <h3>{user?.username} {user?.email}</h3>
                <h4>{user?.address.city} {user?.address.zipcode}</h4>
            </div>

            {
                users.map((user, index) => (<User user={user} key={index} showUser={showUser}/>))

            }
        </div>
    );
}

export default Users;