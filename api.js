// api.js
import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { styles } from "./estilos";

export const WeatherInfo = ({ weatherData }) => {
    return (
        <ImageBackground
            source={require('../assets/Tclimas.jpg')}
            style={styles.Image}
        >
            <View style={styles.weatherContainer}>
                <Text style={styles.weatherCity}>Clima de Huejutla</Text>
                <View style={styles.weatherHeader}>
                    {weatherData.current.condition.icon && (
                        <Image
                            source={{ uri: `http:${weatherData.current.condition.icon}` }}
                            style={styles.enlargedWeatherIcon}
                        />
                    )}
                    <Text style={styles.weatherTemp}>{weatherData.current.temp_c}°C</Text>
                </View>
                <Text style={styles.weatherCondition}>{weatherData.current.condition.text}</Text>
                <Text style={styles.weatherInfo}>
                    Wind: {weatherData.current.wind_kph} km/h | Humidity: {weatherData.current.humidity}%
                </Text>
            </View>
        </ImageBackground>
    );
};
