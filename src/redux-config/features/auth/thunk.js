import { startAuthUser, startLogin } from "./authSlice"


export const getUser = () => {
    return async (dispatch, getState) => {

        dispatch(startLogin());

        const resp = await fetch('https://api.storerestapi.com/users/612e4851345dcc333ac6cb24');
        const { data } = await resp.json();

        dispatch(startAuthUser({user: data.name}))

    }
}


