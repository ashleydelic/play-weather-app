import React, {useState} from 'react';
import axios from 'axios';




function App() {

  const apiKey = '9384c66feb1bae1fbcdcb63411c94cf7';
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
        response => response.json
      ).then(
        data => {
          setWeatherData(data)
          setCity("")
        }
      )

    }
  }
  
 

 

  return (
    <div className="app">
      <div className='search'>
        <input
        placeholder='Enter location'
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
        />

        {typeof weatherData.main === 'undefined' ? (
            <div>
              <p>Welcome to the playtime weather app! Enter your city to see the weather.</p>
            </div>
          ): (
          <div>
            <p>{weatherData.name}</p>
            <p>{Math.round(weatherData.main.temp)}°F</p>
            <p>{weatherData.weather.main}</p>
            </div>
        )
        }
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Lexington</p>
          </div>
          
          <div className='description'>
            <p>Cloudy ☁️, outdoor fun and possibly indoor fun!</p>
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
