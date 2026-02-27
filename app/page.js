"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [popularWeather, setPopularWeather] = useState([]);
  const [loadingPopular, setLoadingPopular] = useState(true);

  useEffect(() => {
    const fetchPopularWeather = async () => {
      const cities = ["London", "New York", "Tokyo", "Paris", "Sydney", "Dubai"];
      try {
        const promises = cities.map((c) =>
          fetch(
            `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_KEY}&q=${c}`
          ).then((res) => {
            if (!res.ok) throw new Error("Fetch failed");
            return res.json();
          })
        );
        const results = await Promise.allSettled(promises);
        const successfulData = results
          .filter((res) => res.status === "fulfilled")
          .map((res) => res.value);
        setPopularWeather(successfulData);
      } catch (err) {
        console.error("Failed to fetch popular weather:", err);
      } finally {
        setLoadingPopular(false);
      }
    };

    fetchPopularWeather();
  }, []);

  const fetchWeatherForCity = async (cityName) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_KEY}&q=${cityName}`
      );

      if (!res.ok) {
        throw new Error("City not found or unable to fetch weather data.");
      }

      const data = await res.json();
      setWeather(data);
      setCity(cityName);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const getWeather = async (e) => {
    e?.preventDefault(); // handle form submit

    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    await fetchWeatherForCity(city);
  };

  return (
    <main className="weather-container">
      <div className="header">
        <h1 className="title">Weather</h1>
        <p className="subtitle">Find current weather conditions for any city</p>
      </div>

      <form className="search-box" onSubmit={getWeather}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="search-button"
          type="submit"
          disabled={loading}
        >
          {loading ? "..." : "Search"}
        </button>
      </form>

      {loading && <p className="status-message">Fetching weather details...</p>}

      {error && <p className="status-message error-message">{error}</p>}

      {weather && !loading && !error && (
        <div className="weather-card">
          <h2 className="location-name">{weather.location.name}</h2>
          <p className="location-region">{weather.location.country}</p>

          <div className="main-weather">
            <img
              src={"https:" + weather.current.condition.icon}
              alt={weather.current.condition.text}
              className="weather-icon"
            />
            <div className="temperature">
              {Math.round(weather.current.temp_c)}<span className="temp-unit">°C</span>
            </div>
          </div>

          <p className="weather-desc">{weather.current.condition.text}</p>

          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Humidity</span>
              <span className="detail-value">{weather.current.humidity}%</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Wind</span>
              <span className="detail-value">{weather.current.wind_kph} km/h</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Feels Like</span>
              <span className="detail-value">{Math.round(weather.current.feelslike_c)}°C</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">UV Index</span>
              <span className="detail-value">{weather.current.uv}</span>
            </div>
          </div>
        </div>
      )}

      {!weather && !loading && !error && (
        <div className="popular-section">
          <h3 className="popular-title">Popular Cities</h3>
          {loadingPopular ? (
            <p className="status-message">Loading popular cities...</p>
          ) : (
            <div className="popular-grid">
              {popularWeather.map((data, index) => (
                <div
                  key={index}
                  className="mini-weather-card"
                  onClick={() => fetchWeatherForCity(data.location.name)}
                >
                  <div className="mini-weather-header">
                    <span className="mini-location">{data.location.name}</span>
                    <img
                      src={"https:" + data.current.condition.icon}
                      alt={data.current.condition.text}
                      className="mini-weather-icon"
                    />
                  </div>
                  <div className="mini-weather-body">
                    <span className="mini-temp">{Math.round(data.current.temp_c)}°C</span>
                    <span className="mini-desc">{data.current.condition.text}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}