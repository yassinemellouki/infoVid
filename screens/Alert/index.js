import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import { Styles } from "./Style"
import Slider from "./components/Slider";
import PropTypes from 'prop-types';

function Alert() {
    return (
        <View style={Styles.container}>
            <Slider />
        </View>
    );
}

export default Alert;
