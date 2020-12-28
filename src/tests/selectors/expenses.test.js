import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses=[{
    id:'1',
    description:"gum",
    note:'',
    amount:212,
    createdAt:0
},{
    id:'2',
    description:"rent",
    note:'',
    amount:22212,
    createdAt:moment(0).subtract(4,'days').valueOf()
},{
    id:'3',
    description:"credit card",
    note:'',
    amount:4500,
    createdAt:moment(0).add(4,'days').valueOf()
}]

test('should filter by text value',()=>{
    const filters={
        text: 'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1]]);
});

// test('shoul filter by startDate',()=>{
//    const filters= {
//        test:'',
//        sortBy:'date',
//        startDate:moment(0),
//        endDate:undefined
//    };

//    const result= selectExpenses(expenses,filters);
//    expect(result).toEqual([expenses[2],expenses[0]]);
// }); 

// test('should sort by date',()=>{
//   const filters={
//     test:'',
//     sortBy:date,
//     startDate: undefined,
//     endDate:undefined
//   };
//   const result=selectExpenses(expenses,filters);
//   expect(result).toEqual(
//       [expenses[2],expenses[0],expenses[1]]
//   );
// });