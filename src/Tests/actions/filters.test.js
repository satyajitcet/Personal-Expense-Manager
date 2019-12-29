import {setTextFilter,sortBydate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters';
import TestRunner from 'jest-runner';
import moment from 'moment';

test('Should Set up Start Date',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SetStartDate',
        startDate:moment(0)
    });
    });

    test('Should Set up End Date',()=>{
        const action = setEndDate(moment(0));
        expect(action).toEqual({
            type:'SetEndDate',
            endDate:moment(0)
        });
        });
    

