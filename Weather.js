import React from "react";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const weatherOptions = {
    Haze: {
        iconName: "weather-fog",
        gradient: ["#D7D2CC", "#304352"],
        title: "Haze",
        subtitle: "Just don't go outside"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm",
        subtitle: "Watch out for lightning"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#2c3e50", "#2980b9"],
        title: "Drizzle",
        subtitle: "Take an umbrella"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#000428", "#004e92"],
        title: "Rain",
        subtitle: "Bring an umbrella"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#2C3E50", "#4CA1AF"],
        title: "Snow",
        subtitle: "Do you want to build a snowman?"
    }, 
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atomosphere",
        subtitle: ""

    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#f46b45", "#eea849"],
        title: "Sunny",
        subtitle: "Go outside and play"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#525252", "#3d72b4"],
        title: "Clouds",
        subtitle: "but put your sunscreen on"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "It's like you have no glasses on."
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#0f0c29", "#302b63","#24243e"],
        title: "Dusty",
        subtitle: "Wear a mask when you go out"
    }
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName}
                    color="white"/>
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
      "Thunderstorm",
      "Drizzle",
      "Rain",
      "Snow",
      "Atmosphere",
      "Clear",
      "Clouds",
      "Haze",
      "Mist",
      "Dust"
    ]).isRequired
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    title: {
        fontSize: 44,
        fontWeight: "300",
        color: "white",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        textAlign: "left"
    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
    }
});
