import React, { Component } from 'react';
import {View, ActivityIndicator} from "react-native";
import { Styles } from "./style"
import { Colors } from "../../../shared/Variables";
import PropTypes from 'prop-types';

function Loading() {
    return (
        <View style={Styles.container}>
            <ActivityIndicator size="large" color={Colors.blue} />
        </View>
    );
}

export default Loading;
