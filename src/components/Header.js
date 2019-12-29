import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
const Header = () =>(
    <header>
     <h1>Expensify</h1>
     <NavLink to='/' exact activeClassName='is-active'> Home</NavLink>
     <NavLink to='/add' activeClassName='is-active'>Add Expense</NavLink>
     {/*<NavLink to='/edit' activeClassName='is-active'>Modify Expense</NavLink>*/}
     <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
    </header>
    );

export default Header;