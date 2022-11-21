import { View, Platform } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils";

const ReloadIcon = ({ load }: any) => {
	const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
	return (
		<View>
			<Ionicons
				onPress={load}
				name={reloadIconName}
				size={24}
				color={colors.PRIMARY_COLOR}
			/>
		</View>
	);
};

export default ReloadIcon;
