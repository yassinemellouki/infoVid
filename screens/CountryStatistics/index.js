import React, { useState, useEffect } from "react";
import { View, Text, Button, Dimensions, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Loading from '../../components/common/Loading';
import { Colors } from "../../shared/Variables";
import Flag from "../../components/common/Flag";
import Statistics from "./components/Statistics";
import { Styles } from "./Style";
import PropTypes from "prop-types";

import {
    fetchCountryStatistics,
    fetchCountryHistory,
    countryFlag
} from "../../shared/API";

function StatisticsScreen({
    route: {
        params: { country }
    }
}) {

    let [totals, setTotals] = useState({ case: 0, recovered: 0, death: 0 });
    let [countryTotals, setCountryTotals] = useState({ case: 0, recovered: 0, death: 0 });
    let [globalTotals, setGlobalTotals] = useState({ case: 0, recovered: 0, death: 0 });
    let [flag, setFlag] = useState(null);
    let [label1Active, setLabel1Active] = useState(true);
    let [label2Active, setLabel2Active] = useState(false);
    let [history, setHistory] = useState(null);
    let [countryChartData, setCountryChartData] = useState([0]);
    let [chartData, setChartData] = useState([0]);
    let [globalChartData, setGlobalChartData] = useState([0]);
    let [pickedDefaultValue, setPickerDefaultValue] = useState(undefined);
    let [isLoading, setIsLoading] = useState(true);
    let [historyLoading, setHistoryLoading] = useState(true);

    let handleSwitchStatistics = (type) => {
        if(type === 'country') {
            setChartData(countryChartData.newCasesHistory);
            setTotals(countryTotals);
            setLabel1Active(true)
            setLabel2Active(false)
        } else {
            setChartData(globalChartData.newCasesHistory);
            setTotals(globalTotals);
            setLabel1Active(false)
            setLabel2Active(true)
        }
    }

    useEffect(() => {

        // Get Country Flag
        countryFlag(country).then(flag => {
            setFlag(flag);
        });


        // Get Country Totals
        fetchCountryStatistics(country).then(data => {

            let totalCases = data.response[0];
            let totals = {
                case: totalCases.cases.active,
                recovered: totalCases.cases.recovered,
                death: totalCases.deaths.total
            };

            setCountryTotals(totals);
            setTotals(totals);
            setIsLoading(false)

        });

        // Get Country History
        fetchCountryHistory(country).then(data => {
            if (data) {
                let newCasesToInt = data.newCasesHistory.map(value => parseInt(value));
                let newDeathsToInt = data.newDeathsHistory.map(value => parseInt(value));
                data.newCasesHistory = newCasesToInt;
                data.newDeathsHistory = newDeathsToInt;
                setHistory(data);
                setChartData(data.newCasesHistory)
                setCountryChartData(data);
            }

        });

        // Get Global Totals
        fetchCountryStatistics("All").then(data => {

            let totalCases = data.response[0];
            let totals = {
                case: totalCases.cases.active,
                recovered: totalCases.cases.recovered,
                death: totalCases.deaths.total
            };

            setGlobalTotals(totals);

        });

        // Get Global History
        fetchCountryHistory("All").then(data => {

            if (data) {
                //setHistory(data);
                let newCasesToInt = data.newCasesHistory.map(value => parseInt(value));
                let newDeathsToInt = data.newDeathsHistory.map(value => parseInt(value));
                data.newCasesHistory = newCasesToInt;
                data.newDeathsHistory = newDeathsToInt;
                setGlobalChartData(data)
            }

            setHistoryLoading(false)

        });

    }, []);

    let handleSelect = dataType => {
        setPickerDefaultValue(dataType);
        switch (dataType) {
            case "active":
                setChartData(history.activeCasesHistory);
                break;
            case "new":
                setChartData(history.newCasesHistory);
                break;
            case "recovered":
                setChartData(history.recoveredCasesHistory);
                break;
            case "all-cases":
                setChartData(history.totalCasesHistory);
                break;
            case "deaths":
                setChartData(history.newDeathsHistory);
                break;
            default:
                setChartData(history.activeCasesHistory);
        }
    };

    let stylingLabel1 = label1Active
        ? [
              Styles.countryLabel,
              {
                  backgroundColor: Colors.red,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20
              }
          ]
        : [
              Styles.countryLabel,
              { borderBottomLeftRadius: 20, borderTopLeftRadius: 20 }
          ];
    let stylingLabel2 = label2Active
        ? [
              Styles.countryLabel,
              {
                  backgroundColor: Colors.red,
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20
              }
          ]
        : [
              Styles.countryLabel,
              { borderBottomRightRadius: 20, borderTopRightRadius: 20 }
          ];

    if(!isLoading && !historyLoading){

        return (
            <View style={Styles.container}>
                <View style={Styles.countryWrapper}>

                    <TouchableWithoutFeedback style={stylingLabel1} onPress={() => handleSwitchStatistics('country')}>
                        <View style={stylingLabel1}>
                            {flag && <Flag type="country" flag={flag} />}
                            <Text style={Styles.country}>{country}</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback style={[stylingLabel2]} onPress={() => handleSwitchStatistics('global')}>
                        <View style={stylingLabel2}>
                            <Flag type="globe" />
                            <Text style={Styles.country}>World</Text>
                        </View>
                    </TouchableWithoutFeedback>

                </View>
                <Statistics totals={totals} history={history} historyLoading={true} chartData={chartData} handleSelect={handleSelect} pickedDefaultValue={pickedDefaultValue}/>
            </View>
        );

    } else {
        return <Loading />
    }
}

export default StatisticsScreen;
