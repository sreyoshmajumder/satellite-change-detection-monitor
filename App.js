import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';

// Icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const LocationClicker = ({ setLocation }) => {
  useMapEvents({
    click(e) {
      setLocation({ lat: e.latlng.lat, lon: e.latlng.lng });
    }
  });
  return null;
};

function App() {
  const [location, setLocation] = useState({ lat: 22.5726, lon: 88.3639 });
  const [data, setData] = useState({ weather: null, news: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, [location]);

  const fetchData = async () => {
  setLoading(true);
  setError('');
  const BACKEND_URL = 'http://localhost:5000';  // Direct - no proxy issues
  console.log(`📡 Direct fetch: ${BACKEND_URL}/weather/${location.lat}/${location.lon}`);
  try {
    const weatherRes = await fetch(`${BACKEND_URL}/weather/${location.lat}/${location.lon}`);
    const weatherText = await weatherRes.text();
    console.log('Weather raw:', weatherText.slice(0, 200));
    if (!weatherRes.ok) throw new Error(`HTTP ${weatherRes.status}`);
    const weather = JSON.parse(weatherText);

    const newsRes = await fetch(`${BACKEND_URL}/news/${weather.city || 'India'}`);
    const newsText = await newsRes.text();
    console.log('News raw:', newsText.slice(0, 200));
    if (!newsRes.ok) throw new Error(`HTTP ${newsRes.status}`);
    const newsData = JSON.parse(newsText);
    setData({ weather, news: newsData.news || [] });
  } catch (err) {
    console.error('Error details:', err);
    setError(`Fetch failed: ${err.message}`);
  }
  setLoading(false);
};




  const isFloodRisk = data.weather?.condition?.toLowerCase().includes('rain') || 
                      data.news.some(n => n.title?.toLowerCase().includes('flood'));

  return (
    <div className="App">
      <h1>Global Satellite Monitor 🌍</h1>
      <div className="debug-status">
        Backend: <a href="http://localhost:5000/" target="_blank">Test</a> | F12 Console for logs
      </div>

      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Enter city or click map" />
      </div>

      <MapContainer center={[location.lat, location.lon]} zoom={10} style={{ height: '60vh', width: '95%', maxWidth: '1400px', margin: '20px auto' }} className="satellite-map">
        <TileLayer url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" attribution="Google Satellite" />
        <LocationClicker setLocation={setLocation} />
        <Marker position={[location.lat, location.lon]}>
          <Popup>Live: {location.lat.toFixed(4)}, {location.lon.toFixed(4)}<br />Click to update data</Popup>
        </Marker>
      </MapContainer>

      <div className="info-panel">
        <div className="location-header">📍 {location.lat.toFixed(4)}, {location.lon.toFixed(4)}</div>

        {loading ? (
          <div className="loading">🔄 Loading live data...</div>
        ) : error ? (
          <div className="error">
            ❌ {error}
            <button onClick={fetchData}>🔄 Retry</button>
          </div>
        ) : (
          <>
            {data.weather && (
              <div className="weather-card">
                <h3>🌤️ {data.weather.city}</h3>
                <p>{data.weather.condition} | {data.weather.temp?.toFixed(1)}°C (feels {data.weather.feels_like?.toFixed(1)}°C)</p>
              </div>
            )}

            {isFloodRisk && (
              <div className="alert">🚨 FLOOD RISK DETECTED!</div>
            )}

            {data.news.length > 0 && (
              <div className="news-list">
                <h3>📰 Live News</h3>
                {data.news.map((n, i) => (
                  <div key={i} className="news-item">
                    <a href={n.url} target="_blank" rel="noopener noreferrer">{n.title}</a>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
