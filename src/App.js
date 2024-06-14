import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Trips from './component/Trips';
import data from './data';
import React from 'react';
const places=data.map(place => {
  return <Trips
              key={place.id}
              {...place}
  
         />
})


function App() {
  const state= React.useState()
      console.log(state)
  return (
    <div className="App">
      
      <Header/>
      <Main/>
      <div className="trip">
      {places}
    </div>
    </div>
  );
}

export default App;
