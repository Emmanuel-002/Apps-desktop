import styles from './Counter.module.css';
import React from 'react'; 
import { useSelector,useDispatch } from 'react-redux';
const Counter = () =>{
    const counter=useSelector((state)=>state.counterState) //gets access of all the states
    const showCounterState=useSelector((state)=>state.showCounterState)
    // const {counterState:count, showCounterState:show} = useSelector((state=>state))
    const dispatch = useDispatch()
    const toggleHandler = () =>{
        dispatch({type:'toggle'})
    };
    const incrementHandler=()=>{
        dispatch({type:'increment',value: 1})
    };
    const decrementHandler=()=>{
        dispatch({type:'decrement',value:1})
    };
    const increaseHandler=()=>{
        dispatch({type:'increase',value: 5})
    };
    
    return(
        <main className={styles.counter}>
            <h1>Redux Counter</h1>
            {showCounterState ? <div className={styles.value}>{counter}</div> : ''}
            <div>
            <button onClick={incrementHandler}>Increament</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={increaseHandler}>Increase by 5</button>
            </div>
            <button onClick={toggleHandler}>Toggle Counter</button>
        </main>
    )
}
export default Counter;