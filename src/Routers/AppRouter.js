import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import ExpenseAddPage from '../components/ExpenseAddPage'; 
import ExpenseEditPage from '../components/ExpenseEditPage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';

    const AppRouter = () =>(
        <BrowserRouter>
        <div>
        <Header/>
        <Switch>
        <Route path = '/' exact={true} component={ExpenseDashboardPage} />
        <Route path = '/add' component={ExpenseAddPage} />
        <Route path = '/edit/:id' component={ExpenseEditPage} />
        <Route path = '/help' component={HelpPage} />
        <Route component = {NotFound} />
        </Switch>
        </div>
        </BrowserRouter>
    );

     export default AppRouter;