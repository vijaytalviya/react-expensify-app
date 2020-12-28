import {setStartDate,setEndDate,sortByDate,sortByAmount,setTextFilter} from "../../actions/filters";
import moment from 'moment';

test('should genrate set start date action object',()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });

});

test('should genrate set start date action object',()=>{
    const action=setTextFilter("hello")
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:"hello"
    })
});
test('should genrate set start date action object',()=>{
    const action=setTextFilter()
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
});

test('should genrate set start date action object',()=>{
    const action =sortByDate();
    expect(action).toEqual({
        type:"SORT_BY_DATE",

    })
})






test('should generate set start date action object',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    });

});

test('should generate set start date action object',()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
});


