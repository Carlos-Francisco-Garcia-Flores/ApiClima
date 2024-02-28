import React, { useState, useEffect } from 'react';
import { Text, ScrollView, ImageBackground, Image, View } from 'react-native';
import { WeatherInfo } from './components/api';
import { styles } from "./components/estilos";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    try {
      const response = await fetch('http://api.weatherapi.com/v1/current.json?key=7a093bcf699243fcb3325336242802&q=Huejutla,es&aqi=no');
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <ImageBackground
      source={require('./assets/clima.jpg')}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.apiContainer}>
        <ImageBackground
          source={require('./assets/clima.jpg')}  // Ruta de la imagen en el directorio 'assets'
          style={styles.apiContainerBackground}
        >
       
          {weatherData && <WeatherInfo weatherData={weatherData} />}
        </ImageBackground>
      </ScrollView>
    </ImageBackground>
  );
}