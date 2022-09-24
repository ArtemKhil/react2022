import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services";

function UserForm({setUsers}) {


    const {handleSubmit, register, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
        defaultValues: {
            name: 'name',
            username: 'username',
            email: 'email'
        }
    });


    const submit = (user) => {
        userService.create(user).then(({data}) => setUsers(users => [...users, data]));
    };


    return (
        <form onSubmit={handleSubmit(submit)}>

            <input type="text" {...register('name', {required: {value: true, message: 'Error'}})}/>
            {
                errors.name && <span>{errors.name.message}</span>
            }
            <input type="text" {...register('username')}/>
            <input type="text"{...register('email')}/>

            <button>Click</button>


        </form>
    );
}

export {UserForm};