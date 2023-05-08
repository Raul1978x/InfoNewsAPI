import React, { useState, useEffect } from "react";
const location = "5500,ar";

const API_KEY = "f316e345a61e88473b0da7700c0fe9cc";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&zip=${location}`;

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`${API_URL}&lang=es`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchWeatherData();

    const interval = setInterval(() => {
      fetchWeatherData();
    }, 3600000); // Actualizar cada 60 minutos

    return () => clearInterval(interval);
  }, [location]);

  return { weatherData, error };
};

const Weather = () => {
  const { weatherData, error } = useWeather(location);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!weatherData) {
    return <div>Cargando...</div>;
  }
  const { name, main, weather } = weatherData;
  const iconCode = weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <div className="p-0 m-0 text-primary fs-6 d-flex fw-bold">
      <img className="px-2 m-0" src={iconUrl} alt={weather[0].description} />
      <p className="px-2 m-0">
        Pronóstico: {weather[0].description}
        <br />
        Temperatura actual: {Math.round(main.temp)}°C
      </p>
      {/* <p className="px-2 m-0">Humedad: {main.humidity}%</p> */}
    </div>
  );
};

export default Weather;
