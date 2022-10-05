import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from "react-router-dom";

import {authService} from "../../services";

function LoginPage() {

    const {handleSubmit, register} = useForm();

    const navigate = useNavigate();

    const [query,] = useSearchParams();

    const submit = async (user) => {

        try {
            const {data} = await authService.login(user);
            authService.setTokens(data);
            navigate('/cars');


        } catch (e) {
            console.log(e);

        }
    };


    return (
        <div>
            {query.has('expSession') && <h2>Expired session.Please Login.</h2>}

            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>

        </div>

    );
}

export {LoginPage};
