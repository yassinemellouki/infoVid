import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image} from 'react-native';
import { Styles } from './Style';

import Colors from "../../../../shared/Variables"

import Head from '../../../../components/common/Head';

import AirTransmision from "../../../../assets/air-transmition.png";
import HumanContact from "../../../../assets/human-contacts.png";
import ContainedObjects from "../../../../assets/contained-objects.png";

import Swiper from 'react-native-swiper'


function SubSlider() {
    return (
            <Swiper showsButtons={false} horizontal={false} style={Styles.hSwiper}>
                <View style={Styles.hSlideWrapper}>
                    <View style={Styles.hSlideContentWrapper}>
                        <Image source={AirTransmision} style={[Styles.hImage]} />
                        <View style={Styles.hSlideContent}>
                            <Head plain="Air Transmission" type="head-2" style={{textAlign: 'center'}} />
                            <Text style={Styles.text, Styles.text2}>Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify</Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.hSlideWrapper}>
                    <View style={Styles.hSlideContentWrapper}>
                        <Image source={HumanContact} style={[Styles.hImage]} />
                        <View style={Styles.hSlideContent}>
                            <Head plain="Human Contacts" type="head-2" style={{textAlign: 'center'}}/>
                            <Text style={Styles.text, Styles.text2}>Washing your hands is one of thesimplest ways you can protect</Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.hSlideWrapper}>
                    <View style={Styles.hSlideContentWrapper}>
                        <Image source={ContainedObjects} style={[Styles.hImage]} />
                        <View style={Styles.hSlideContent}>
                            <Head plain="Containted Objects" type="head-2" style={{textAlign: 'center'}}/>
                            <Text style={[Styles.text], [Styles.text2]}>Use the tissue while sneezing,In this way, you can protect your droplets.</Text>
                        </View>
                    </View>
                </View>
              </Swiper>
    );
}

export default SubSlider;
