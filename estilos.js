// estilos.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#2196f3', // Azul
        marginBottom: 20,
        textAlign: 'center',
    },
    weatherHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    weatherIcon: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    button: {
        backgroundColor: '#1565c0',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    weatherContainer: {
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fondo semitransparente
        width: 300,
        height: 350,
    },
    weatherCity: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    weatherTemp: {
        fontSize: 42,
        fontWeight: 'bold',
    },
    weatherCondition: {
        fontSize: 20,
        marginBottom: 10,
    },
    weatherInfo: {
        fontSize: 18,
        marginTop: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image: {
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    enlargedWeatherIcon: {
        width: 100,
        height: 100,
    },
    weatherContainerBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    apiContainer: {
        flex: 1,
        padding: 20,
    },
    apiContainerBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
