import React, {useEffect, useState} from 'react';
import User from "../user/User";

function Users() {

    let [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value));
    }, [])


    return (
        <div>
            {
                users.map((user, index) => (<User user={user} key={index}/>))
            }

        </div>
    );
}

export default Users;