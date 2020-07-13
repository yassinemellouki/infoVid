import React, { useState, useEffect } from 'react';
import { View, Picker} from 'react-native';
import { Styles } from "./Style"
import PropTypes from 'prop-types';



function Selection({navigation, countries, handleChange, selectedCountry}) {

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
