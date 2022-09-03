import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../redux-config/features/auth/authSlice';



export const Login = () => {


    //const { isAuth } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    

    return (
        <>
            <div>Login</div>
            <br />
            <button onClick={() => { dispatch( startLogin() ) }}>Login</button>
        </>
    )
}
