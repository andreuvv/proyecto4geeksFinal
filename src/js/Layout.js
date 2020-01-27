import React from 'react';
import { Login } from './views/login';
import { Home } from './views/home';
import { Navbar } from '../component/navbar';
import { Card } from '../component/card';
import { Profile } from './views/profile';
//import { BrowserRouter, Route, Switch } from "react-router-dom";
//import injectContext from "./store/appContext";


function Layout() {
  return (
    <>
      < Login />
    </>
  );
}

export default Layout;
