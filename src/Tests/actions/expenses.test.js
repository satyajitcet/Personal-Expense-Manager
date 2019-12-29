import {addExpense,removeExpense,editExpense} from '../../actions/expenses';
import TestRunner from 'jest-runner';
test('Should Set up Remove Expense Object',()=>{
const action = removeExpense({id:'123C'});
expect(action).toEqual({
    type:'RemoveExpense',
    id:'123C'
})
});

test('Should Set up Edit Expense Object',()=>{
    const action = editExpense('123C',{id:'123C',
        description:'Rent',
        note:'New Note',
        amount:76.87,
        createdAt:56765});
    expect(action).toEqual({
        type:'EditExpense',
 id:'123C',updates:{id:'123C',
 description:'Rent',
 note:'New Note',
 amount:76.87,
 createdAt:56765}
    })
    });

  //Add Expense

  test('Should Set up Add Expense Object',()=>{
      const expenseData = {
      description:'Rent',
      note:'New Note',
      amount:76.87,
      createdAt:56765};
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'AddExpense',
        expense:{...expenseData,
           id:expect.any(String)
        }
    })
    });

    test('Should Set up Default Expense Object',()=>{
        const expenseData = {
        };
      const action = addExpense(expenseData);
      expect(action).toEqual({
          type:'AddExpense',
          expense:{...expenseData,
             id:expect.any(String),
             description:'',
             note:'',
             amount:0,
             createdAt: 0
          }
      })
      });
