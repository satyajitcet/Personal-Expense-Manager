import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
const NotFound = () =>(
    <div>
     <p>Page not found.404 Error!!</p>
     <Link to='/'>Goto Home</Link>
    </div>
    );

export default NotFound;