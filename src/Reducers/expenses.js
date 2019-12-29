
//Expense Reducer
const expenseReducerDefaultState = [];
export default  (state = expenseReducerDefaultState,action) => 
{
    switch(action.type){
        case 'AddExpense':
            return [
                ...state,
                action.expense
            ];
        case 'RemoveExpense':
            return state.filter(({id})=>id!==action.id);
        case 'EditExpense':
            return state.map((expense) => {
                if (expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };}
                else
                {
                    return expense;
                };
                
            });
            default:
                return state;
    }

};
