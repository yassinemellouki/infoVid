import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image} from 'react-native';
import { Styles } from './Style';

import {Colors} from "../../../../shared/Variables"

import Head from '../../../../components/common/Head';
import SubSlider from "../SubSlider"

import StayHome from "../../../../assets/stay-home.png";
import Viruses from "../../../../assets/viruses.png";

import Swiper from 'react-native-swiper'


function Slider() {
    return (
            <Swiper 
                dot={
                    <View style={{backgroundColor:'rgba(0,0,0,.2)', width: 25, height: 6,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
                }
                activeDot={
                    <View style={{backgroundColor: Colors.blue, width: 25, height: 6,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
                }
            >
                <View style={Styles.slideWrapper}>
                    <Image source={StayHome} style={[Styles.image]} />
                    <View style={Styles.slideContent}>
                        <Head plain="COVID-19 Alert " type="sub-head" />
                        <Head plain="Stay at Home Quarantine To stop Corona virus" type="head-1" />
                        <Text style={Styles.text}>There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to .</Text>
                    </View>
                </View>
                <View style={Styles.slideWrapper}>
                    <View style={Styles.slideContent}>
                        <Head plain="What Is Covid-19" type="sub-head" />
                        <Head plain="Coronavirus" type="head-1" />
                        <Text style={Styles.text}>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of Critical Event Preparedness and Response</Text>
                    </View>
                    <Image source={Viruses} style={[Styles.image]} />
                </View>
                <View style={Styles.slideWrapper}>
                    <View style={[Styles.slideContent], {alignItems: 'center'}}>
                        <Head plain="Covid-19" type="sub-head" />
                        <Head plain="Contagion" type="head-1" />
                        <Text style={[Styles.text], {textAlign: 'center', paddingTop: 8}}>
                            Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type
                        </Text>
                    </View>
                    <SubSlider />
                </View>
            </Swiper>
    );
}

Slider.defaultProps = {};

Slider.propTypes = {
};

export default Slider;
