import { createStore } from "redux";

const initialCounterValue={counterState:0,showCounterState:true}

const counterReducer=(state=initialCounterValue,action)=>{
    if (action.type==='increment'){
        return {counterState: state.counterState + action.value, showCounterState:state.showCounterState};
    }
    if(action.type==='decrement'){
        return {counterState: state.counterState - action.value, showCounterState:state.showCounterState};
    }
    if(action.type==='increase'){
        return {counterState: state.counterState + action.value, showCounterState:state.showCounterState};
    }
    if(action.type==='toggle'){
        return {counterState: state.counterState, showCounterState: !state.showCounterState};
    }
    return state;
}

const appStore=createStore(counterReducer);

export default appStore;