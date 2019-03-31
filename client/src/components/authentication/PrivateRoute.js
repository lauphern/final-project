
import React from 'react';
import { Route, Redirect } from "react-router-dom";

//render private routes
const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
  
  <Route {...rest} render={(props) => (
        loggedIn ? (
            <Component {...props} {...rest}/>
        ) : (
          <Redirect to="/login"/>
        )
  )}/>

)

export default PrivateRoute;