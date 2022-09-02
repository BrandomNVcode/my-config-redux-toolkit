import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";


export const App = () => {


  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();



  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={!isAuth? <Login /> : <Navigate replace to="/dashboard" />}></Route>
              <Route path="/dashboard"
                element={isAuth? <Dashboard /> : <Navigate replace to="/" />}
              />
          </Routes>
      </BrowserRouter>
  );
}
