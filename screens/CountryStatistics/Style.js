import { StyleSheet } from 'react-native';
import { Colors } from "../../shared/Variables";

export const Styles = StyleSheet.create({
	container : {
        width: "100%",
		flex : 1,
		backgroundColor: '#fff',
		//alignItems: 'center',
		justifyContent : 'center',
	},
    countryWrapper: {
        overflow: "hidden",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        maxWidth: "auto",
    },
    countryLabel: {
        width: "50%",
        paddingVertical: 6,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Colors.blue
    },
    country: {
        fontFamily: "roboto-bold",
        fontSize: 15,
        color: "white",
        paddingLeft: 8,
        letterSpacing: 1 
    },
});
