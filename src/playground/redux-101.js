
import {createStore} from "redux";



const incrementBy =({incrementBy= 1} ={})=>{
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
        
    };
}
const decrementBy = ({decrementBy=1}={})=>{
    return{
        type: 'DECREMENT',
        decrementBy : decrementBy
    };
}
const reset =()=>{
    return {type: 'RESET'};
}
const set=({count})=>{
    return {type: 'SET',
    count : count
    };
}

const store = createStore((state = { count : 0 }, action) => {
   
 switch(action.type){

       case 'INCREMENT' :
                   return {
            count : state.count + action.incrementBy
           };
        case 'DECREMENT':
           
                    return{
                count : state.count - action.decrementBy
            };
        case 'RESET':
                return {
                    count : 0
                };
        case 'SET':
            return{
                count : action.count
            };
        default :
        return state ;
   }
});

store.subscribe(()=> {
    console.log(store.getState());

});
store.dispatch(incrementBy());

store.dispatch(incrementBy({incrementBy:7}));

store.dispatch(decrementBy({decrementBy:10}));
store.dispatch(decrementBy());
store.dispatch(reset());
store.dispatch(set({ count: 101 }));

//console.log(store.getState());