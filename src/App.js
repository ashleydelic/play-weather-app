import React, {useState} from 'react';
import axios from 'axios';

function App() {
  // const url='https://api.openweathermap.org/data/2.5/weather?q=lexington,ky,usa&appid=5bc10b7aed41cf1f5c7aa583cd837f33';
  return (
    <div className="app">
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Lexington, KY</p>
          </div>
          <div className='temp'>
            <h1>61 °F</h1>
          </div>
          <div className='description'>
            <p>Cloudy, indoor fun!</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>59 °F</p>
          </div>
          <div className='humidity'>
            <p>57%</p>
          </div>

        </div>
      </div>
   
    </div>
  );
}

export default App;
