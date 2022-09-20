import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../user/User";
import {Post} from "../post/Post";


function Users() {


    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState([]);

    const getPosts = (id) => {
        userService.getUserPostsById(id).then(({data}) => {
            setPosts(data)
        })
    };

    useEffect(() => {
        userService.getAll.then(({data}) =>
            setUsers(data))
    }, []);

    return (

        <div>
            {
                posts.map((post, index) => <Post key={index} post={post}/>)
            }

            {
                users.map((user, index) => (<User key={index} user={user} getPosts={getPosts}/>))
            }

        </div>
    );
}

export {Users};
