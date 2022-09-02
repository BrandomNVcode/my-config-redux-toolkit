import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  loading: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLogin: (state) => {
        state.isAuth = true;
        state.loading = true;
    },
    startLogout: (state) => {
        state.isAuth = false;
        state.user = null;
    },
    startAuthUser: (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
    }
  },
})



export const { startLogin, startLogout, startAuthUser } = authSlice.actions;

export default authSlice.reducer;



