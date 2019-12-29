//Set text filters
export const setTextFilter = (text = '') =>(
{
    type:"SetTextFilter",
    text
}
);

//Sort By date
export const sortBydate = () =>(
    {
        type:"SortByDate"
    }
);
//Sort By Amount
export const sortByAmount = () =>({
    type:"SortByAmount"
});
//Set Start Date
export const setStartDate = (startDate) =>({
    type:"SetStartDate",
    startDate
});
//Set End Date
export const setEndDate = (endDate) =>({
    type:"SetEndDate",
    endDate
});

