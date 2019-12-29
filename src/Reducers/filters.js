import moment from 'moment';

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  
  export default  (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case 'SetTextFilter':
        return {
          ...state,
          text: action.text
        };
      case 'SortByAmount':
        return {
          ...state,
          sortBy: 'amount'
        };
      case 'SortByDate':
        return {
          ...state,
          sortBy: 'date'
        };
      case 'SetStartDate':
        console.log(action.startDate);
        return {
          ...state,
          startDate: action.startDate
        };
      case 'SetEndDate':
        return {
          ...state,
          endDate: action.endDate
        };
      default:
        return state;
    }
  };
  


