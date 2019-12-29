import {createStore,combineReducers} from 'redux';
import expensesReducer from '../Reducers/expenses';
import filtersreducer from '../Reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            expenses:expensesReducer,
            filters:filtersreducer
        })
    );
    return store;
};