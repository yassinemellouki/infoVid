import { StyleSheet } from 'react-native';
import window from "../../../../constants/layout";
import { Colors } from "../../../../shared/Variables";

export const Styles = StyleSheet.create({
    slideWrapper: {
        overflow: 'hidden',
        justifyContent: 'space-around',
        paddingBottom: 30,
        flex: 1,
        marginTop: 28,
    },

    hSwiper: {
        justifyContent: 'center',
    },

    hSlideWrapper: {
        overflow: 'hidden',
        padding: 30,
    },

    hSlideContentWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efefef',
        height: "100%",
        borderRadius: 10,
    },

    hSlideContent: {
        paddingVertical: 18,
        overflow: "hidden"
    },

    slideContent: {
        paddingVertical: 15,
        paddingHorizontal: 15,
    },

	image: {
        width: "100%",
        height: 250,
        resizeMode: 'stretch',
	},
	hImage: {
        height: 200,
        resizeMode: 'contain',
        margin: 'auto',
	},

    text: {
        color: Colors.black,
        fontSize: 14,
        paddingVertical: 6,
        lineHeight: 19,
    },

    text2: {
        textAlign: 'center',
        paddingHorizontal: 40
    }

});
