import { configureStore, createListenerMiddleware  } from '@reduxjs/toolkit'
import authSlice, { startLogin } from '../features/auth/authSlice';
import { getUser } from '../features/auth/thunk';


const listenerMiddleware = createListenerMiddleware()


listenerMiddleware.startListening({
    actionCreator: startLogin,
    effect: async (action, listenerApi) => {

        listenerApi.dispatch(getUser());
  
    }
})



export const store = configureStore({
    reducer: {
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})

