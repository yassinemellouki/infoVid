import React from 'react';
import { Text } from "react-native";
import PropTypes from 'prop-types';
import { Styles } from './Style';

function Head ({plain}) {
    return (
        <Text style={Styles.head}>{plain} :</Text>
    )
}

export default Head;
