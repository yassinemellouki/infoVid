import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "../shared/Icon";

import AnalysisIcon from "../assets/icons/analysis.png";
import AlertIcon from "../assets/icons/alert.png";

import LocationSelect from "../screens/LocationSelect";
import  StatisticsScreen from "../screens/CountryStatistics";
import Alert from "../screens/Alert";

export default function AppContainer() {
    const Tab = createBottomTabNavigator();
    const  LocationSelectStack = createStackNavigator();
    const  CountryStatisticsStack = createStackNavigator();
    const  AlertStack = createStackNavigator();
    const [locationSelected, setLocationSelected] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    let handleLocationSelect = (country) => {
        console.log(country)
        setSelectedCountry(country);
        setLocationSelected(true);
    }

    return (
        <NavigationContainer>
            {
            !locationSelected ? 
                <LocationSelect handleLocationSelect={handleLocationSelect}/>
                : 
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;
                            console.log(route)

                            if(route.name === 'Statistics'){
                                if(focused) {
                                    return <Image source={AnalysisIcon} />;
                                } else {
                                    return <Image source={AnalysisIcon} style={{opacity: .5}} />;
                                }

                            }else if(route.name === 'Alert'){

                                if(focused) {
                                    return <Image source={AlertIcon} />;
                                } else {
                                    return <Image source={AlertIcon} style={{opacity: .5}} />;
                                }

                            }
                        }     
                    })}
                    tabBarOptions={{
                      activeTintColor: 'tomato',
                      inactiveTintColor: 'gray',
                    }}
                >
                        <Tab.Screen name="Statistics">
                            {() => (
                                <CountryStatisticsStack.Navigator>
                                    <CountryStatisticsStack.Screen
                                        name="Statistics"
                                        component={StatisticsScreen}
                                        initialParams={{ country: selectedCountry.name}}
                                        options = {() => {
                                           return  ({
                                            headerLeft: (props) => (
                                                    <Button title="Countries" onPress={() => {setLocationSelected(false)}}></Button>
                                                )
                                            })
                                        }
                                        }
                                    />
                                </CountryStatisticsStack.Navigator>
                            )}
                        </Tab.Screen>
                        <Tab.Screen name="Alert">
                            {() => (
                                <AlertStack.Navigator >
                                    <AlertStack.Screen
                                        name="Alert"
                                        component={Alert}
                                    />
                                </AlertStack.Navigator>
                            )}
                        </Tab.Screen>
                    </Tab.Navigator>
            }
        </NavigationContainer>
    )

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: "100%",
            backgroundColor: "#eee",
            alignItems: "center",
            justifyContent: "center"
        }
    });
}
