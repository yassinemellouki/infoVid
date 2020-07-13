import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
	container : {
		backgroundColor: '#ffffff',
		flex : 1,
		flexDirection : 'column'
	},

	contentContainer : {
		flex: 1,
		justifyContent : 'center'		
	},

	contentContainerUnCentered : {
		flex: 0,
		justifyContent : 'flex-start',
	}
	
});
