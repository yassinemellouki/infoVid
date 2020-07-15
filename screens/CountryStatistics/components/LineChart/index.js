import React from 'react';
import { LineChart } from "react-native-chart-kit";
import moment from 'moment';
import { View, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

function CLineChart ({data}) {
    let i = 0;
    let days = [];
        do {

            let currentDate = moment().subtract(i, 'days').format('DD');

            days.unshift(currentDate)

            i++;

        } while (i < 12)
                return (<View>
                    <LineChart
                    data={{
                          labels: days,
                          datasets: [
                            {
                              data: data
                            }
                          ]
                        }}
                        width={Dimensions.get("window").width - 32} // from react-native
                        height={220}
                        chartConfig={{
                          backgroundColor: "#000",
                          backgroundGradientFrom: "#fb8c00",
                          backgroundGradientTo: "#ffa726",
                          decimalPlaces: 0,
                          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                          style: {
                            borderRadius: 16,
                          },
                          propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                          }
                        }}
                        bezier
                        style={{
                          marginVertical: 8,
                          borderRadius: 16
                        }}
                    />
                </View>)
}

export default CLineChart;
