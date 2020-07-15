import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image} from 'react-native';
import { Styles } from './Style';

import Colors from "../../../../shared/Variables"

import Head from '../../../../components/common/Head';

import Symptomps from "../../../../assets/symptomps.png";
import Mask from "../../../../assets/mask.png";
import Wash from "../../../../assets/wash.png";
import Rag from "../../../../assets/rag.png";
import Contacts from "../../../../assets/avoid-contact.png";

import Swiper from 'react-native-swiper'


function Slider() {
    return (
            <Swiper showsButtons={false} loop={false} horizontal={false} style={Styles.hSwiper}>
                <View style={Styles.hSlideWrapper}>
                    <View style={Styles.hSlideContentWrapper}>
                        <View style={Styles.hSlideContent}>
                            <Head plain="Covid-19" type="sub-head" style={{textAlign: 'center'}} />
                            <Head plain="Symptomps" type="head-2" style={{textAlign: 'center'}} />
                            <Text style={Styles.text, Styles.text2}>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory</Text>
                        </View>
                        <Image source={Symptomps} style={Styles.introImage} />
                    </View>
                </View>
                <View style={Styles.hSlideWrapper}>
                    <View style={Styles.hSlideContentWrapper}>
                            <Head plain="Covid-19" type="sub-head" style={{textAlign: 'center'}} />
                            <Head plain="What  should we do" type="head-2" style={{textAlign: 'center'}} />
                            <Text style={Styles.text, Styles.text2}>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused</Text>
                    </View>
                </View>
                <View style={Styles.hSlideWrapper}>
                    <View style={Styles.hSlideContentWrapper}>
                        <View style={Styles.hSlideContent}>
                            <View style={Styles.numberWrapper}>
                                <Text style={Styles.number}>01</Text>
                            </View>
                            <Head plain="wear masks" type="head-2" style={{textAlign: 'center'}}/>
                            <Text style={[Styles.text], [Styles.text2]}>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively</Text>
                        </View>
                        <Image source={Mask} style={[Styles.hImage]} />
                    </View>
                </View>
                <View style={Styles.hSlideWrapper}>
                    <View style={Styles.hSlideContentWrapper}>
                        <View style={Styles.hSlideContent}>
                            <View style={Styles.numberWrapper}>
                                <Text style={Styles.number}>02</Text>
                            </View>
                            <Head plain="Wash Your Hands" type="head-2" style={{textAlign: 'center'}}/>
                            <Text style={[Styles.text], [Styles.text2]}>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals</Text>
                        </View>
                        <Image source={Wash} style={[Styles.hImage]} />
                    </View>
                </View>
                <View style={Styles.hSlideWrapper}>
                    <View style={Styles.hSlideContentWrapper}>
                        <View style={Styles.hSlideContent}>
                            <View style={Styles.numberWrapper}>
                                <Text style={Styles.number}>03</Text>
                            </View>
                            <Head plain="Use nose - rag" type="head-2" style={{textAlign: 'center'}}/>
                            <Text style={[Styles.text], [Styles.text2]}>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively</Text>
                        </View>
                        <Image source={Rag} style={[Styles.hImage]} />
                    </View>
                </View>
                <View style={Styles.hSlideWrapper}>
                    <View style={Styles.hSlideContentWrapper}>
                        <View style={Styles.hSlideContent}>
                            <View style={Styles.numberWrapper}>
                                <Text style={Styles.number}>04</Text>
                            </View>
                            <Head plain="Avoid contacts" type="head-2" style={{textAlign: 'center'}}/>
                            <Text style={[Styles.text], [Styles.text2]}>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic</Text>
                        </View>
                        <Image source={Contacts} style={[Styles.hImage]} />
                    </View>
                </View>
              </Swiper>
    );
}

export default Slider;
