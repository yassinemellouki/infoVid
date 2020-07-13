import { StyleSheet } from 'react-native';
import { Colors } from "../../shared/Variables"

export const Styles = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent : 'center'		
	},

	contentContainerUnCentered : {
		flex: 0,
		justifyContent : 'flex-start',
	},
    imgBg: {
        width: "100%",
        height: 380,
        resizeMode: "cover",
		alignItems: 'center',
		justifyContent : 'center'
    },
    picker: {
        width: 180,
        fontSize: 16,
        borderRadius: 8,
        color: 'black',
    },
    btn: {
        backgroundColor: Colors.blue,
        paddingVertical: 8,
        paddingHorizontal: 22,
        borderRadius: 4
    },
    btnText: {
        fontSize: 16,
        color: "white",
    }
	
});
