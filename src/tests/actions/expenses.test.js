import {addExpense,editExpense,removeExpense} from "../../actions/expenses";


test('should setup remove expense action object',()=>{
    const action = removeExpense({id:"123abc"});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:"123abc"
    });
 
});

test('should setup edit expense action object',()=>{
    const action =editExpense("3232",{note:"hello"});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:"3232",
        updates:{note:"hello"}
    })
})

test("should setup add expende action object with provide value",()=>{
    const expenseData ={
        description:"rent",
        amount:2121,
        createdAt:1000,
        note:"this is last"

    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense: {
        ...expenseData,
        id : expect.any(String)
        }
    })
});

test("should setup add expende action object with default value",()=>{
    const action= addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        
        description:" ",
        note:" ",
        amount: 0,
        createdAt:0,
        id: expect.any(String)
        
    }
    });
})