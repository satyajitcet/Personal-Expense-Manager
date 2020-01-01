import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import expenses from '../selectors/expenses';
export const ExpenseList = (props) => {
    let display_str = 'No Expense';
    if(props.expenses.length>0){
        console.log('length is more');
        display_str = 'ExpenseList';}
    return(
<div>
    <h1>{display_str}</h1>
    {props.expenses.map((expense) =>(<ExpenseListItem key = {expense.id} {...expense}/>))}
    
</div>
)};

const mapStateToProps = (state) =>{
    return {
        expenses:expenses(state.expenses,state.filters),
        
    };
};

export default connect(mapStateToProps)(ExpenseList);