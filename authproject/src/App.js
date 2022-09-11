//50mins
import {Fragment} from 'react';
import Login from './Login/Login';
import Home from './Home/Home';
import Header from './Header/Header';
import { useState,useEffect } from 'react'
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  // const [btnState,setBtnState] = useState(false);
  console.log('Before effect');
  useEffect(()=>{
    console.log('in effect');
  const localStorageData = localStorage.getItem('userLogState');
  if(localStorageData === 'LOGGED_IN'){
    setIsLoggedIn(true);
  } //infinite loop roams here
}, []);

  const loginHandler = (email, password) => {
    console.log(email, password);
    localStorage.setItem('userLogState', 'LOGGED_IN');
    setIsLoggedIn(true); //function is recalled and ends in infinte loop
  };
  const logoutHandler = () =>{
    localStorage.removeItem('userLogState');
    setIsLoggedIn(false);
  };
// const btnClick = () =>{
//   setBtnState(prevData => !prevData);
// }

  return (
   <Fragment>
    <Header userLogged={isLoggedIn}
    onLogout={logoutHandler} />
    <main>
    {!isLoggedIn ? (
    <Login onLogin = {loginHandler}/> ) : (
    <Home onLogout={logoutHandler}/>
    )}
    {/* <button onClick={btnClick}>Button</button> */}
    </main>
   </Fragment>
    
  );
}

export default App;
