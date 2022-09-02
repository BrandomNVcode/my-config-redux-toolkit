import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../redux-config/features/auth/authSlice';



export const Dashboard = () => {

    const { user, loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    if(loading) {
        return <span>Cargando...</span>;
    }

    return (
        <>
            <h1>Dashboard</h1>
            <br />
            <h2>Bienvenido: {user}</h2>
            <br />
            <button onClick={() => { dispatch( startLogout() ) }}>Logout</button>
        </>
    )
}
