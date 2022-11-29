import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('')
  
  const url='https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=5bc10b7aed41cf1f5c7aa583cd837f33';

  return (
    <div className="app">
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Lexington, KY</p>
          </div>
          <div className='temp'>
            <h1>61°F</h1>
          </div>
          <div className='description'>
            <p>Cloudy ☁️, outdoor fun and indoor fun!</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>59°F</p>
            <p>Feels like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>57%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>14 mph</p>
            <p>Winds</p>
          </div>

        </div>
      </div>
   
    </div>
  );
}

export default App;
