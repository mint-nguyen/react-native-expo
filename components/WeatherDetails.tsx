import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../utils";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const WeatherDetails = ({ currentWeather, unitsSystem }: any) => {
	const {
		main: { feels_like, humidity, pressure },
		wind: { speed },
	} = currentWeather;

	const windSpeed =
		unitsSystem === "metric"
			? `${Math.round(speed)} m/s`
			: `${Math.round(speed)} miles/h`;
	return (
		<View style={styles.container}>
			<View style={styles.flexRow}>
				<View
					style={{
						...styles.box,
						borderRightWidth: 1,
						borderRightColor: colors.SECONDARY_COLOR,
					}}>
					<View style={styles.flexRow}>
						<FontAwesome5
							name="temperature-low"
							size={25}
							color={colors.PRIMARY_COLOR}
						/>
						<View>
							<Text>Feels like: </Text>
							<Text style={styles.text}> {feels_like}°</Text>
						</View>
					</View>
				</View>
				<View style={styles.box}>
					<View style={styles.flexRow}>
						<MaterialCommunityIcons
							name="water"
							size={30}
							color={colors.PRIMARY_COLOR}
						/>
						<View>
							<Text>Humidity: </Text>
							<Text style={styles.text}> {humidity}%</Text>
						</View>
					</View>
				</View>
			</View>
			<View
				style={{
					...styles.flexRow,
					borderTopWidth: 1,
					borderTopColor: colors.SECONDARY_COLOR,
				}}>
				<View
					style={{
						...styles.box,
						borderRightWidth: 1,
						borderRightColor: colors.SECONDARY_COLOR,
					}}>
					<View style={styles.flexRow}>
						<MaterialCommunityIcons
							name="speedometer"
							size={25}
							color={colors.PRIMARY_COLOR}
						/>
						<View>
							<Text>Pressure: </Text>
							<Text style={styles.text}> {pressure} hPa</Text>
						</View>
					</View>
				</View>
				<View style={styles.box}>
					<View style={styles.flexRow}>
						<MaterialCommunityIcons
							name="weather-windy"
							size={30}
							color={colors.PRIMARY_COLOR}
						/>
						<View>
							<Text>Wind Speed: </Text>
							<Text style={styles.text}> {windSpeed}</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "90%",
		marginTop: "auto",
		margin: 15,
		borderWidth: 1,
		borderColor: colors.SECONDARY_COLOR,
		borderRadius: 10,
	},
	flexRow: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	box: {
		flex: 1,
		padding: 20,
	},
	text: {
		fontSize: 20,
		color: colors.PRIMARY_COLOR,
		fontWeight: "500",
	},
});

export default WeatherDetails;
