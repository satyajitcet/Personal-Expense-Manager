import React,{Component} from 'react';
import {connect} from 'react-redux';
import {setTextFilter,sortByAmount,sortBydate,setStartDate,setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';
import 'react-dates/initialize';

class ExpenseListFilters extends Component{
    state = {
        calender:null
    };
    onDatesChange = ({startDate,endDate}) => {
      this.props.dispatch(setStartDate(startDate));
      this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calender) => {
       this.setState(() => {return ({calender})});
    }
    render(){
        return(
        <div>
        <input type='text' value={this.props.filters.text} onChange={(e)=>{
         this.props.dispatch(setTextFilter(e.target.value));
        }}></input>
        <select
        value={this.props.filters.sortBy}
        onChange={(e) =>{
            if (e.target.value === "date")
            {
                this.props.dispatch(sortBydate());
            }
            else if (e.target.value === "amount")
            {
                this.props.dispatch(sortByAmount());
            }
            
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        <DateRangePicker
        startDate = {this.props.filters.startDate}
        startDateId="your_unique_start_date_id"
        endDate = {this.props.filters.endDate}
        endDateId="your_unique_end_date_id"
        onDatesChange = {this.onDatesChange}
        focusedInput = {this.state.calender}
        onFocusChange = {this.onFocusChange}
        numberOfMonths = {1}
        isOutsideRange = {() => false}
        showClearDates = {true}
        />
    </div>
    
        );
    }
}

    
    const mapStateToProps = (state) =>{
        return {
            filters:state.filters    
        };
    };
    
    export default connect(mapStateToProps)(ExpenseListFilters);