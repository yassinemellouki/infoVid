import React from 'react';
import { Colors } from "../../../../shared/Variables";

import {View, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import PropTypes from 'prop-types';

import Icon from "../../../../shared/Icon";

import CLineChart from "../LineChart";

import { Styles } from './Style';

function SwitchableChart({chartData, handleSelect, value = "new"}) {

    return (
        <View>
            <RNPickerSelect
                onValueChange={handleSelect}
                value={value}
                style={
                    {
                        inputIOS: {
                            fontSize: 18,
                            color: Colors.black,
                            paddingLeft: 6 
                        },
                        inputAndoid: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: Colors.black,
                            paddingLeft: 20
                        }
                    }
                }
                items={[
                    { label: 'Active', value: 'active' },
                    { label: 'New', value: 'new' },
                    { label: 'Recovered', value: 'recovered' },
                    { label: 'All Cases', value: 'all-cases' },
                    { label: 'Deaths', value: 'deaths' },
                ]}
                Icon = {() => {
                    return <Icon name="arrow" size={44} style={Styles.icon}/>
                }}
            />
            <CLineChart data={chartData}/> 
        </View>
    );
}

export default SwitchableChart;
