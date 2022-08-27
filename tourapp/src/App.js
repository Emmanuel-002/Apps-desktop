//loading bar, create css,
//https://www.npmjs.com/package/react-top-loading-bar
import './App.css';
import Places from './Data';
import Tour from './TourCard/Tour';
import { useReducer } from 'react';

const initialState = {
  paris: true,
  ireland:true,
  vieland: true,
  italy: true,
  poland: true,
  main: true
}

function reducer(state,action){
  switch(action){
      case 'paris':
      return{...state, paris:!state.paris}
      case 'ireland':
      return{...state, ireland:!state.ireland} 
      case 'vieland':
      return{...state, vieland:!state.vieland}
      case 'italy':
      return{...state, italy:!state.italy}
      case 'poland':
      return{...state, poland:!state.poland}
      case 'reset':
      return{...initialState}
  }
}

function App() {
  const [tour,dispatch]=useReducer(reducer,initialState)

 initialState.main = ((tour.paris||tour.ireland||tour.vieland||tour.italy||tour.poland) ? initialState : !initialState)    
 return(
      <div>
        {
          initialState.main ?
          <div>
            <header className='header'>
          <h1>Our Tours</h1> <hr />  
        </header>
          {tour.paris && <Tour place={Places[0]} click={()=>dispatch('paris')} />}
          {tour.ireland && <Tour place={Places[1]} click={()=>dispatch('ireland')} />}
          {tour.vieland && <Tour place={Places[2]} click={()=>dispatch('vieland')} />}
          {tour.italy && <Tour place={Places[3]} click={()=>dispatch('italy')} />}
          {tour.poland && <Tour place={Places[4]} click={()=>dispatch('poland')} />}
          </div>:
          <div className='refresh'>
            <h1>No Tours Left</h1>
            <button onClick={()=>dispatch('reset')}>Refresh</button>
          </div>
        }
      
    </div>
  );
}

export default App;
