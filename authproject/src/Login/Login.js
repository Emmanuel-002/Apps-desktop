
import classes from './Login.module.css';
import Card from '../Card/Card';
import Button from '../Button/Button';

//collect, validate, form validatation
import { useState,useEffect} from 'react'

const Login = (props) => {
    const [enteredEmail,setEnteredEmail] = useState('');
    const [emailIsValid,setEmailIsValid] = useState();
    const [enteredPassword,setEnteredPassword] =useState('');
    const [passwordIsValid,setPasswordIsValid] =useState();
    const [formIsValid,setFormIsValid] = useState(false);
    
    useEffect(()=>{
       const identifier = setTimeout(()=>{
            console.log('login effect');
        setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6)
        },1000)

        //clean up
        return()=>{
            console.log('clean up')
            clearTimeout(identifier);
        }

    }, [enteredEmail,enteredPassword]);
    //name
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    //     setFormIsValid(event.target.value.includes('@') && enteredPassword.trim().length > 6)
     };
    const emailBlurHandler = () =>{
        setEmailIsValid(enteredEmail.includes('@'))
    };

    //password
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    //     setFormIsValid(event.target.value.trim().length > 6 && enteredEmail.includes('@'))
    };
    const passwordBlurHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6)
    }
    //submit
    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail,enteredPassword);
    }

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailIsValid===false? classes.invalid : ''}`}>
                    <label>E-Mail</label>
                    <input type='email' 
                    onChange={emailChangeHandler} 
                    value={enteredEmail}
                    onBlur={emailBlurHandler}/>
                </div>
                <div className={`${classes.control} ${passwordIsValid===false? classes.invalid : ''}`}>
                    <label>Password</label>
                    <input type='password' 
                    onChange={passwordChangeHandler} 
                    value={enteredPassword}
                    onBlur={passwordBlurHandler}/>
                </div>
                <div className={classes.actions}>
                    <Button type='submit' 
                    disabled={!formIsValid}
                    >Login</Button>
                </div>
            </form>
        </Card>
    );
}
export default Login;