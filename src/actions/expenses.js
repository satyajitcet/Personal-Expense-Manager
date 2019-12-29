import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';
import moment from 'moment';
//Add Expense
export const addExpense = ({
description = '',
note = '',
amount = 0,
createdAt = 0
} = {})=>({
    type:"AddExpense",
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt

    }
});
//Remove Expense
export const removeExpense = (
    {id} = {}
) =>({type:"RemoveExpense",
id});

//Edit Expense
export const editExpense = (id,updates) =>({
type:"EditExpense",
id,
updates
});