import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import { Styles } from "./Style"
import Slider from "./components/Slider";
import PropTypes from 'prop-types';

function Instructions() {
    return (
        <View style={Styles.container}>
            <SubSlider />
        </View>
    );
}

export default Slider;
