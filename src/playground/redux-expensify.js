import {createStore, combineReducers, bindActionCreators} from 'redux';
import uuid from "uuid";


const addExpense= (
    {
        description=" ",
        note=" ",
        amount= 0,
        createdAt=0
    } = {}
    )=>
    {
    return{
        type: "ADD_EXPENSE",
        expense :{
            id :uuid(),
            description,
            note,
            amount,
            createdAt
            

        }
    };
}

const removeExpense=({id}={})=>{
        return{
            type: "REMOVE_EXPENSE",
            id
        }
};
const editExpense=(id,updates)=>{
    return{
        type : "EDIT_EXPENSE",
        id,
        updates
    }
};

const getVisibleExpenses =(expenses, {text,sortBy,startDate,endDate })=>{
return expenses.filter((expense)=>{
    const startDateMatch = typeof startDate !== "number"||expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== "number"||expense.createdAt<=endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    console.log("text value",text,'1');

    return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => { 
    if (sortBy === "date") {
        return a.createdAt <b.createdAt ? 1 :-1;
    }
    else if(sortBy ==="amount"){
       return a.amount <b.amount ? 1:-1;
    }

});

};
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState,action)=>{
    switch(action.type){
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter(({id})=> id !==action.id);
        case "EDIT_EXPENSE":
            return state.map((expense)=>{
                if(expense.id==action.id){
                    return{
                        ...expense,
                        ...action.updates
                    };
                }
            });
            default:
            return state;
    }
};


const setTextFilter=(text="")=>{
    return{
        type: "SET_TEXT_FILTER",
        text

        
    }
}
const sortByAmount=()=>{
    return{
        type:'SORT_BY_AMOUNT'

    };
}
const sortByDate=()=>{
    return{
        type:"SORT_BY_DATE"

    };
};
const setStartDate=(startDate)=>{
    return{
        type:"SET_START_DATE",
        startDate
    };
};
const setEndDate=(endDate)=>{
    return{
        type: "SET_END_DATE",
        endDate
    };
}
const filtersReducerDefaultState = {
    text: '',
    sortBy :'date',
    startDate : undefined,
    endDate : undefined
};
const filtersReducer= (state= filtersReducerDefaultState,action)=>{
        switch(action.type){
            case "SET_TEXT_FILTER":
                return{
                  ...state,
                  text : action.text  
                };
            case "SORT_BY_AMOUNT":
                return{
                    ...state,
                    sortBy : "amount"

                };
            case "SORT_BY_DATE":
                return{
                    ...state,
                    sortBy :"date"
                };
                case "SET_START_DATE":
                    return{
                        ...state,
                        startDate : action.startDate
                    };
                case "SET_END_DATE":
                    return{
                         ...state,
                         endDate : action.endDate
                    };
            default: 
            return state;
        }
};

const store = createStore(
    combineReducers(
        {
            expenses : expensesReducer,
            filters : filtersReducer
        }
    ));
store.subscribe(()=>{
    const state =store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);

    console.log(visibleExpenses);
});

const expenseOne=store.dispatch(addExpense({description:"Rent",amount:1100, createdAt:-21000}));
const expenseTwo=store.dispatch(addExpense({description:"coffee",amount:99300,createdAt:-1000}));

//store.dispatch(removeExpense({id:expenseOne.expense.id}));
//store.dispatch(editExpense(expenseTwo.expense.id,{amount : 1000}));

//store.dispatch(setTextFilter("cof"));
//store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate());
// const DemoStore ={
//   expenses : [{
//      id: 'poijasfaf',
//      description: ' ',
//      note: 'This was the final peyment for that address',
//      amount : 43434,
//      createdAt: 0
//   }],
//   filters: {
//       text : "",
//       sortBy : "date",
//       startDate:undefined,
//       endDate: undefined
//   }

// };