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

	hImage: {
        height: 200,
        resizeMode: 'contain',
        margin: 'auto',
	},
    introImage: {
        height: 250,
        resizeMode: 'contain',
        margin: 'auto',
    },
    numberWrapper: {
        backgroundColor: Colors.lightenRed,
        alignSelf: 'center',
        padding: 8,
        borderRadius: 30,
        margin: 10 
    },
    number: {
        color: Colors.lightRed,
        fontFamily: 'roboto-bold', 
        fontSize: 26,
    },
    text: {
        color: Colors.black,
        fontSize: 14,
        lineHeight: 19,
    },

    text2: {
        textAlign: 'center',
        padding: 10
    }

});
