import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../utils";
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
			<Text style={styles.city}>{name}</Text>
			<Image style={styles.icon} source={{ uri: iconUrl }} />
			<Text style={styles.textPrimary}>{temp}°</Text>
			<Text style={styles.description}>{description}</Text>
			<Text style={styles.textSecondary}>{main}</Text>
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
	textPrimary: {
		fontSize: 40,
		fontWeight: "500",
		color: colors.PRIMARY_COLOR,
	},
	textSecondary: {
		fontSize: 20,
		fontWeight: "500",
		color: colors.SECONDARY_COLOR,
	},
	city: {
		fontSize: 20,
		fontWeight: "500",
	},
});

export default WeatherInfo;
