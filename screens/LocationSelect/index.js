import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TextInput, Picker, TouchableOpacity} from 'react-native';
import { Styles } from "./Style"
import Loading from '../../components/common/Loading';
import WorldMap from "../../assets/worldmap.png";
import PropTypes from 'prop-types';

import { fetchCountries, deviceLocation } from "../../shared/API"
import { isoCountries } from "../../shared/Helpers"

import Selection from "./components/Selection"
import Map from "./components/Map"

export default function LocationSelect ({navigation, handleLocationSelect}) {

    const [isLoading, setIsLoading] = useState(true);
    const [countries, setCountries] = useState({});
    const [selectedCountry, setSelectedCountry] = useState({});
    const [isAutoLocationSelected, setIsAutoLocationSelected] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true)


    let handleNavigation = () => {
        navigation.navigate("Statistics");
    }

    useEffect(() => {

        // Get location form Device
        if(!isAutoLocationSelected){

            let setDeviceLocation = async () => {

                const address = await deviceLocation();

                setSelectedCountry({name: address[0].country, isoCode: address[0].isoCountryCode})
                setIsAutoLocationSelected(true);
            }

            // Fetching Countries form API
            setDeviceLocation().then(() => {
                    fetchCountries()
                    .then(data => 
                        {
                            const fetchedCountries = data;
                            setCountries(fetchedCountries)
                            setIsLoading(false)
                       })
            })
        }

  },[selectedCountry, countries]);

    const handleChange = (country, i) => {
        setSelectedCountry({name: country, isoCode: isoCountries[country]});
    };

    if(!isLoading && countries.length > 0) {
        return (
            <View style={Styles.container}>
                <Map selectedCountry={ selectedCountry.name } />
                <Selection countries={countries} handleChange={handleChange} selectedCountry={selectedCountry}/>
                <TouchableOpacity style={Styles.btn} disabled={false} onPress={() => handleLocationSelect(selectedCountry)}>
                    <Text style={Styles.btnText}>Go</Text>
                </TouchableOpacity >
            </View>
        ) 

    } else {
        return (
            <Loading />
        )
    }
}
