import React, { Fragment } from "react";

import Head from "../../../../components/common/Head";
import Icon from "../../../../shared/Icon";

import Total from "../Total";
import SwitchableChart from "../SwitchableChart";

import { View, Text } from "react-native";
import { Styles } from "./Style";
import PropTypes from "prop-types";

function Statistics({totals, history, chartData, handleSelect, pickedDefaultValue}) {
    return (
        <Fragment>
            <View style={Styles.totalsWrapper}>
                <View>
                    <Head plain="Total cases" />
                </View>
                <View style={Styles.totals}>
                    {Object.keys(totals).map(key => (
                        <Total
                            key={key}
                            value={totals[key]}
                            type={key}
                            style={Styles.totals}
                        />
                    ))}
                </View>
            </View>
            {history && (
                <View style={Styles.totalsWrapper}>
                    <View>
                        <Head plain="Daily updates" />
                    </View>
                    <SwitchableChart
                        chartData={chartData}
                        handleSelect={handleSelect}
                        value={pickedDefaultValue}
                    />
                </View>
            )}
        </Fragment>
    );
}

export default Statistics;
