import moment from 'moment';
import filtersReducer from '../../reducers/filters';


test('should setup default filter value',()=>{
 const state = filtersReducer(undefined,{type:'@@INIT'});
 expect(state).toEqual({
     text:'',
     sortBy:'date',
     startDate:moment().startOf('month'),
     endDate:moment().endOf('month')
 });
});

test('should set sort by to amount',()=>{
    const state=filtersReducer(undefined,{type:"SORT_BY_AMOUNT"});
    expect(state.sortBy).toBe('amount');

})

text('should set sortBy to date',()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:'undefined',
        sortBy:'amount'
    };
    const action={type:"SORT_BY_DATE"};
    const state =filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date');
});