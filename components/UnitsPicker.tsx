import { View, StyleSheet } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";

const UnitsPicker = ({ unitsSystem, setUnitsSystem }: any) => {
	return (
		<View style={styles.container}>
			<Picker
				mode="dropdown"
				selectedValue={unitsSystem}
				onValueChange={(val) => setUnitsSystem(val)}>
				<Picker.Item label="°C" value="metric" />
				<Picker.Item label="°F" value="imperial" />
			</Picker>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 50,
		width: 100,
		padding: 2,
	},
});

export default UnitsPicker;
