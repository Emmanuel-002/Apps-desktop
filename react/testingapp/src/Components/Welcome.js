import {useState} from 'react'

function Welcome(){
    const[changeText,setChangeText]=useState(false)
    const changeTextHandler=()=>{
        setChangeText(true)
    }
    return(
        <div>
            <h2>Hello World</h2>
           {!changeText ? <p>Good to have you back!</p> : ""}
           {changeText ? <p>Text was changed</p> : ""}
           <button onClick={changeTextHandler}>Change Text</button>
        </div>
    )
}
export default Welcome