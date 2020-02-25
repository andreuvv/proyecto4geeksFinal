import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from './views/login';
import { Home } from './views/home';
import { Navbar } from './component/navbar';
import { Profile } from './views/profile';
import { FormRegister } from './views/formregister';
import { NewRegister } from './component/newregister';
import { Detail } from './views/detail';


import injectContext from "./store/appContext";


export const Layout = () => {
  const basename = process.env.BASENAME || "";
  return (
    <div className="d-flex flex-column h-100">
			<BrowserRouter>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/profile/:id" component={Profile} />
           			    <Route path="/home" component={Home} />
						<Route path="/formregister" component={FormRegister} />
						<Route path="/newregister" component={NewRegister} />						
            			<Route path="/home" component={Home} />
						<Route path="/detail/:id" component={Detail} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>				
			</BrowserRouter>
		</div>
  );
}

export default injectContext(Layout);


