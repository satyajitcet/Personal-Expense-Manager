import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import expenses from '../selectors/expenses';
export const ExpenseList = (props) => (
<div>
    <h1>ExpenseList</h1>
    {props.expenses.map((expense) =>(<ExpenseListItem key = {expense.id} {...expense}/>))}
    
</div>
);

const mapStateToProps = (state) =>{
    return {
        expenses:expenses(state.expenses,state.filters),
        
    };
};

export default connect(mapStateToProps)(ExpenseList);