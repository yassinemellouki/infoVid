import React from 'react';
import { Text } from "react-native";
import PropTypes from 'prop-types';
import { Styles } from './Style';

function Head ({plain, type, style = {}}) {
    if(type === "head-1"){

        return (
            <Text style={[Styles["head-1"], style]}>{plain}</Text>
        )

    }else if(type === "head-2"){
        return (
            <Text style={[Styles["head-2"], style]}>{plain}</Text>
        )

    }else if(type === "sub-head") {

        return (
            <Text style={[Styles["sub-head"], style]}>{plain}</Text>
        )

    } else {

        return (
            <Text style={[Styles.head], style}>{plain} :</Text>
        )

    }
}

export default Head;
