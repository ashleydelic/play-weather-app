import React, {useState} from 'react';
import './index.css'
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
    <div className="container">
        <input className='input'
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
            <p>{weatherData.weather[0].main}</p>
            </div>
        )
        }

        </div>
        
  );
}

export default App;
