import React from 'react';
import Icon from "../../../../shared/Icon";
import {View, Text} from 'react-native';
import { Styles } from './Style';
import { Colors } from "../../../../shared/Variables";
import PropTypes from 'prop-types';

function Total ({type, value}) {
    let color, plain;

    switch(type){
        case 'case':
             color = Colors.orange;
             plain = 'Affected'
            break;
        case 'recovered':
             plain = 'Recovered'
             color = Colors.green;
            break;
        case 'death':
             plain = 'Death'
             color = Colors.red;
            break;
        default: 
             color = "gray"
    }

    return (
        <View style={Styles.wrapper}>
            <Text style={[Styles.plain, {color}]}>{plain}</Text>
            <Icon name={type} size={44} color={color}/>
            <Text style={[Styles.plain, {color}]}>{value}</Text>
        </View>
    );
}

export default Total ;
