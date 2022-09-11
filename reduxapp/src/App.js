import Counter from './Components/Counter/Counter';
import React from 'react';
// import { Provider } from 'react-redux'

function App() {
  return  <Counter />;
}

export default App;

/**
 * props chain
 * App.js -> loggedIn
 *  Header.js -> loggedIn
 *    RightMenu.js -> loggedIn
 *      LeftMenu.js -> loggedIn
 *        Logout.js -> loggedIn
 * 
 * Application wide state
 * file.js -> all the state
 * loggedin
 * Redux is a central state management library
 * 
 * reducer function is the one which will have the initial state definition, it maintains all the states
 * 
 * Redux has store where you add all your states
 * every store will have one and only one reducer function which will have access of the store
 * You can only have one store
 * subscription.- component gets the data from store thorugh subscription
 * dispatch - action
 * redux is a javascript specific library not react specific library, you need to install the package
 * use npm install redux react-redux to install redux and react-redux
 * 
 * ----------------------------------
 * increase by num, increment, decrement - buttons
 * show value - button
 * redux store - counter value, showvalue
 * 
 */
