import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import WeatherInfo from "./components/WeatherInfo";
import UnitsPicker from "./components/UnitsPicker";
import colors from "./utils";
import ReloadIcon from "./components/ReloadIcon";
import WeatherDetails from "./components/WeatherDetails";

export default function App() {
	const [errMsg, setErrMsg] = useState<string>();
	const [currentWeather, setCurrentWeather] = useState(null);
	const [unitsSystem, setUnitsSystem] = useState("metric");

	const load = async () => {
		setCurrentWeather(null);
		setErrMsg("");
		try {
			let { status } = await Location.requestBackgroundPermissionsAsync();

			if (status !== "granted") {
				setErrMsg("Access to the location is needed.");
				return;
			}

			const location = await Location.getCurrentPositionAsync();

			const { longitude, latitude } = location.coords;

			const weatherUrl = `${process.env.BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${process.env.WEATHER_API_KEY}`;

			const response = await fetch(weatherUrl);

			const result = await response.json();

			if (response.ok) {
				setCurrentWeather(result);
			} else {
				setErrMsg(result.message);
			}
		} catch (err: any) {
			setErrMsg(err.message);
		}
	};

	useEffect(() => {
		load();
	}, [unitsSystem]);

	if (currentWeather) {
		return (
			<View style={styles.container}>
				<StatusBar style="auto" />
				<View style={styles.container}>
					<UnitsPicker
						unitsSystem={unitsSystem}
						setUnitsSystem={setUnitsSystem}
					/>
					<ReloadIcon load={load} />
					<WeatherInfo currentWeather={currentWeather} />
				</View>
				<WeatherDetails
					currentWeather={currentWeather}
					unitsSystem={unitsSystem}
				/>
			</View>
		);
	}

	if (errMsg) {
		return (
			<View style={styles.container}>
				<Text>{errMsg}</Text>
				<StatusBar style="auto" />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
