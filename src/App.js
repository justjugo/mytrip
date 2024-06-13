import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Trips from './component/Trips';
import data from './data';

const places=data.map(place => {
  return <Trips
              key={place.id}
              {...place}
  
         />
})

function App() {
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
