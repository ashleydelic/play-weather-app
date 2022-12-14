import React, {useState} from 'react';
import './index.css'
function App() {

  const apiKey = '9384c66feb1bae1fbcdcb63411c94cf7';
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
        response => response.json()
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
        placeholder='Enter City...'
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
        />

        {typeof weatherData.main === 'undefined' ? (
            <div>
              <p className='intro-msg'>Welcome to the playtime weather app! Enter your city to see the weather. <br></br>
              Clear โ๏ธ๐ค : Outdoor play <br></br>
              Clouds โ๏ธ : Outdoor, and possibly indoor play <br></br>
              Rain ๐งโ : Indoor play <br></br>
              Wind ๐ฌ : Outdoor, and possibly indoor play<br></br>
              Storm โ : Indoor play <br></br> 
              Snow โ๏ธ : Indoor play, dress warm for outdoors</p>
            </div>
          ): (
          <div className='weather-data'>
            <p className='city'>{weatherData.name}</p>
            <p className='temp'>{Math.round(weatherData.main.temp)}ยฐF</p>
            <p className='weather'>{weatherData.weather[0].main}</p>
            </div>
        )
        }

        {weatherData.cod === "404" ? (
          <p className='city-error'>City not found.</p>
        ) : (
          <></>
        )
        }

        </div>
        
  );
}

export default App;
