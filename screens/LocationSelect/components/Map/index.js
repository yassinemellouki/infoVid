import React, { useState, useEffect } from "react";
import { getISOByParam } from "iso-country-currency";
import { View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Styles } from "./Style";
import window from "../../../../constants/layout";
import { fetchCountryGFromName } from "../../../../shared/API";

import MapStyle from "./MapStyle.json";

import PropTypes from "prop-types";

function Map({ selectedCountry, passRegionChanged }) {
    const [region, setRegion] = useState({});
    const [isChanged, setIsChanged] = useState(true)
    useEffect(() => {
        passRegionChanged(true)
        if (selectedCountry) {
            fetchCountryGFromName(selectedCountry).then(data => {
                let region = {};
                if (data[0]) {
                    region.latitude = data[0];
                    region.longitude = data[1];
                    region.latitudeDelta = 14.0922;
                    region.longitudeDelta = 14.0421;
                } else {
                    region.latitude = 32;
                    region.longitude = -5;
                    region.latitudeDelta = 90;
                    region.longitudeDelta = 90;
                }

                region ? onRegionChange(region) : onRegionChange({});
            });
        }
    }, [selectedCountry]);

    function onRegionChange(region) {
        setRegion({ region });
        passRegionChanged(false);
    }

    return (
        <View pointerEvents="none">
            <MapView
                pointerEvent="none"
                style={Styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0043,
                    longitudeDelta: 0.0034
                }}
                region={region.region}
                onRegionChange={onRegionChange}
                customMapStyle={MapStyle}
            ></MapView>
        </View>
    );
}

export default Map;
