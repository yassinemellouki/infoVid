import { StyleSheet } from 'react-native';
import {Colors} from '../../../shared/Variables';

export const Styles = StyleSheet.create({

    head: {
        width: "100%",
        paddingVertical: 10,
        fontSize: 20,
        fontFamily: "roboto-regular",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "black"
    },
    "sub-head": {
        color: Colors.lightRed,
        paddingBottom: 8,
        fontSize: 15,
        fontFamily: "roboto-bold",
        letterSpacing: 0.5,
        textTransform: "capitalize"
    },
    "head-1": {
        color: Colors.darkGreen,
        fontSize: 23,
        fontFamily: "roboto-bold",
        letterSpacing: 0.5,
        textTransform: "capitalize"
    },
    "head-2": {
        color: Colors.darkGreen,
        fontSize: 18,
        fontFamily: "roboto-bold",
        letterSpacing: 0.5,
        textTransform: "capitalize"
    }

});
