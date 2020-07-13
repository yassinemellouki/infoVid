import React, { useState, useEffect } from 'react';
import { View, Picker} from 'react-native';
import { Styles } from "./Style"
import PropTypes from 'prop-types';

import { fetchCountries, deviceLocation } from "../../../../shared/API"
import { isoCountries } from "../../../../shared/Helpers"


function Selection({navigation, passSelectedCountry}) {

    const [countries, setCountries] = useState({});
    const [selectedCountry, setSelectedCountry] = useState({});
    const [isAutoLocationSelected, setIsAutoLocationSelected] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    const handleChange = (country, i) => {
        setSelectedCountry({name: country, isoCode: isoCountries[country]});
        passSelectedCountry(country)
    };

    useEffect(() => {

            // Get location form Device
        if(!isAutoLocationSelected){

            let setDeviceLocation = async () => {

                const address = await deviceLocation();

                setSelectedCountry({name: address[0].country, isoCode: address[0].isoCountryCode})
                passSelectedCountry(address[0].country)
                setIsAutoLocationSelected(true);
            }

            // Fetching Countries form API
            setDeviceLocation().then(() => {
                    fetchCountries()
                    .then(data => 
                        {
                            const fetchedCountries = data;
                            setCountries(fetchedCountries)
                       })
            })
        }

  },[selectedCountry, countries]);

    return (
        <View>
                {
                    (countries.length > 0) && ( 
                        <Picker
                          selectedValue={ selectedCountry.name }
                          style={ Styles.picker }
                          onValueChange={ handleChange }
                        >
                            {
                                countries.map((country, i) => ( 
                                    <Picker.Item key={i} label={country.name} value={country.name} />
                                ))
                            }
                        </Picker>
                        )
                }
        </View>
    );
}

export default Selection ;
