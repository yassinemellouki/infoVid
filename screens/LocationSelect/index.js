import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TextInput, Picker, Button } from 'react-native';
import { Styles } from "./Style"
import WorldMap from "../../assets/worldmap.png"
import PropTypes from 'prop-types';

import Selection from "./components/Selection"
import Map from "./components/Map"

export default function LocationSelect ({navigation, handleLocationSelect}) {

    const [selectedCountry, setSelectedCountry] = useState(null);

    let handleNavigation = () => {
        navigation.navigate("Statistics");
    }

    let passSelectedCountry = (country) => {
        setSelectedCountry(country)
    }
    return (
        <View style={Styles.container}>
            {
                //<ImageBackground source={WorldMap} style={Styles.imgBg}></ImageBackground>
            }
            <Map selectedCountry={ selectedCountry } />
            <Selection passSelectedCountry={passSelectedCountry}/>
            <Button title="GO" onPress={() => handleLocationSelect(selectedCountry)}>
            </Button>
        </View>
    );
}
