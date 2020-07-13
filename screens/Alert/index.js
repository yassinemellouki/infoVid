import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Styles } from "./Style"
import PropTypes from 'prop-types';

function Alert() {
    return (
        <View style={Styles.container}>
            <Text>Alert</Text>
        </View>
    );
}

export default Alert;
