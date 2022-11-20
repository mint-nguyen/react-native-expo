import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const WeatherInfo = ({ currentWeather }: any) => {
	const {
		main: { temp },
		weather: [details],
		name,
	} = currentWeather;

	const { icon, main, description } = details;

	const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
	return (
		<View style={styles.container}>
			<Text>{name}</Text>
			<Image style={styles.icon} source={{ uri: iconUrl }} />
			<Text>{temp}</Text>
			<Text style={styles.description}>{description}</Text>
			<Text>{main}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { alignItems: "center" },
	description: { textTransform: "capitalize" },
	icon: {
		width: "100px",
		height: "100px",
	},
});

export default WeatherInfo;
