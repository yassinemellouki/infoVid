import React from 'react';
import { Image } from "react-native";
import globeIcon from "../../../assets/icons/globe.png";
import PropTypes from 'prop-types';
import { Styles } from './Style';

function Flag ({type, flag}) {
    if(type === 'country'){
        return <Image source={{uri: flag}} style={[Styles.flag, Styles.flagCountry]}/>
        
    }else if(type === 'globe') {
            return <Image source={globeIcon} style={[Styles.flag, Styles.flagWorld]}/>
    }else {
        return <></>
    }
}

export default Flag;
