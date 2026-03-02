from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, origins="*")

OW_KEY = os.getenv('OPENWEATHER_API_KEY', '').strip()
NEWS_KEY = os.getenv('NEWSAPI_KEY', '').strip()

print(f"Keys: OW={bool(OW_KEY)}, NEWS={bool(NEWS_KEY)}")

@app.route('/')
def home():
    return jsonify({
        'status': 'LIVE',
        'path': request.path,
        'keys_ok': bool(OW_KEY and NEWS_KEY),
        'test_url': '/weather/22.57/88.36'
    })

@app.route('/weather/<path:latlon>')
def get_weather(latlon):
    print(f"Path hit: /weather/{latlon}")
    try:
        lat, lon = map(float, latlon.split('/'))
        print(f"Parsed lat={lat}, lon={lon}")
    except:
        return jsonify({'error': 'Bad lat/lon - use /weather/22.57/88.36'}), 400

    if not OW_KEY:
        return jsonify({'temp': 28.5, 'condition': 'Clear', 'city': 'Kolkata Mock', 'feels_like': 30})

    try:
        url = 'https://api.openweathermap.org/data/2.5/weather'
        params = {'lat': lat, 'lon': lon, 'appid': OW_KEY, 'units': 'metric'}
        resp = requests.get(url, params=params, timeout=5)
        print(f"OW code: {resp.status_code}")
        data = resp.json() if resp.headers.get('content-type', '').startswith('application/json') else {}
        if resp.status_code != 200 or data.get('cod') != 200:
            return jsonify({'temp': None, 'condition': data.get('message', 'API fail'), 'city': 'N/A'})
        return jsonify({
            'temp': data['main']['temp'],
            'condition': data['weather'][0]['main'],
            'city': data['name'],
            'feels_like': data['main']['feels_like']
        })
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'temp': None, 'condition': 'Error', 'city': 'N/A', 'debug': str(e)})

@app.route('/news/<city>')
def get_news(city):
    print(f"News: {city}")
    if not NEWS_KEY:
        return jsonify({'news': [{'title': 'Mock news', 'url': '#'}]})
    try:
        url = 'https://newsapi.org/v2/everything'
        params = {'q': city, 'apiKey': NEWS_KEY, 'pageSize': 3}
        resp = requests.get(url, params=params, timeout=5)
        data = resp.json()
        articles = [{'title': a['title'], 'url': a['url']} for a in data.get('articles', [])]
        return jsonify({'news': articles})
    except Exception as e:
        return jsonify({'news': [], 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
