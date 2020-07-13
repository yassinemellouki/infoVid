import { StyleSheet } from 'react-native';
import { Colors } from "../../../shared/Variables";

export const Styles = StyleSheet.create({
    picker: {
        fontSize: 42,
        display: "none"
    },
    icon: {
        fontSize: 14,
        color: Colors.black,
        transform: [ {rotate: '90deg'} ]
    }
});
