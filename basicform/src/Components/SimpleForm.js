//import {useState,useEffect} from 'react'
import useInput from '../hooks/useInput';

const SimpleForm = () =>{
    //name
    const {
        value: userName,
        hasError: nameHasError,
        isValid: userNameIsValid,
        valueChangeHandler: userNameChangeHandler,
        valueBlurHandler: userNameBlurHandler,
        reset: nameReset,
    } = useInput((value)=>value.trim() !=="");
    const {
        value: userEmail,
        hasError: emailHasError,
        isValid: userEmailIsValid,
        valueChangeHandler: useremailChangeHandler,
        valueBlurHandler: useremailBlurHandler,
        reset: emailReset,
    } = useInput((value)=>value.includes('@'));

    // const [enteredName, setEnteredName] = useState("");
    // //const [nameIsValid,setNameIsValid]=useState(false);
    // const [nameIsVisited,setNameIsVisited]=useState(false);

    //email
    //const [enteredEmail,setEnteredEmail]=useState("");
    //const [emailIsVisited,setEmailIsVisited]=useState(false);

//    // const [formIsValid,setFormIsValid]=useState(false);
//     const nameIsValid = enteredName.trim() !=="";
   // const emailIsValid = enteredEmail.includes('@');

    let formIsValid = false;
    if(userNameIsValid && userEmailIsValid){
        formIsValid = true
    }
    // // useEffect( ()=> {
    // //     if(nameIsValid){
    // //         setFormIsValid(true);
    // //     }
    // //     else{
    // //         setFormIsValid(false)
    // //     }

    // // },[nameIsValid]);

    // const nameChangeHandler=(event)=>{
    //     setEnteredName(event.target.value);
    //     // if(event.target.value !==''){
    //     //     setNameIsValid(true);
    //     // }
    // };
    // const nameBlurHandler =()=>{
    //     setNameIsVisited(true);
    //     // if(enteredName.trim()===''){
    //     //     setNameIsValid(false)
    //     // }
    // }

    //email
    // const emailChangeHandler=(event)=>{
    //     setEnteredEmail(event.target.value);
    // }
    // const emailBlurHandler=()=>{
    //     setEmailIsVisited(true)
    // }

    const formSubmitHandler=(event)=>{
        event.preventDefault();
       // setNameIsVisited(true);
       // setEmailIsVisited(true)
        if(!userNameIsValid  && !userEmailIsValid)
        {
            //setNameIsValid(false)
            return;
        }
        console.log(userName,userEmail);
        //setEnteredName("");
       // // setNameIsValid(true);
       // setNameIsVisited(false);
       nameReset();
        //setEnteredEmail("");
        //setEmailIsVisited(false);
        emailReset();
    }
    return(
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control 
            ${nameHasError ? 'invalid':""}`}>
                <label htmlFor='name'>Your Name</label>
                <input 
                type='text' 
                id='name' 
                onChange={userNameChangeHandler}
                value={userName}
                onBlur={userNameBlurHandler}
                />
                {nameHasError &&(
                <p className='error-text'>Name cannot be blank</p>)}
            </div>

            {/*email*/}

            <div className={`form-control 
            ${emailHasError ? 'invalid':""}`}>
                <label htmlFor='email'>Your E-mail</label>
                <input 
                type='email' 
                id='email' 
                onChange={useremailChangeHandler}
                value={userEmail}
                onBlur={useremailBlurHandler}
                />
                {emailHasError &&(
                <p className='error-text'>Email Format (joe@mail.com)</p>)}
            </div>
            <div className='form-actions'>
                <button type='submit' disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}
export default SimpleForm;