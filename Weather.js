import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";

export default function Weather({ temp }){
    return (
    <View stlye={styles.container}>
        <Text>{temp}</Text>
    </View>
    );
}

Weather.prototype = {
    temp:PropTypes.number.isRequired,
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
    }
});
