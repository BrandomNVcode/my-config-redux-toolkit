import React from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux-config/features/thunk';



export const Login = () => {


    //const { isAuth } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    

    return (
        <>
            <div>Login</div>
            <br />
            <button onClick={() => { dispatch( getUser() ) }}>Login</button>
        </>
    )
}
