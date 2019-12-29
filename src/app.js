import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './Routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
const store = configureStore();


store.dispatch(addExpense({description:'Water Bill',amount:50}));
store.dispatch(addExpense({description:'Gas Bill',amount:700,createdAt:1000}));
store.dispatch(addExpense({description:'Rent',amount:7000}));

//store.dispatch(setTextFilter('Water'));
//const state = store.getState();
//const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
//console.log(visibleExpenses);

const jsx = (
<Provider store = {store}>
<AppRouter/>
</Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
