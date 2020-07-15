import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image, StatusBar, TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Colors } from "../shared/Variables";

import Icon from "../shared/Icon";

import AnalysisIcon from "../assets/icons/analysis.png";
import AlertIcon from "../assets/icons/alert.png";
import InstructionsIcon from "../assets/icons/instructions.png";

import LocationSelect from "../screens/LocationSelect";
import StatisticsScreen from "../screens/CountryStatistics";
import Alert from "../screens/Alert";
import Instructions from "../screens/Instructions";

export default function AppContainer() {
    const Tab = createBottomTabNavigator();
    const  LocationSelectStack = createStackNavigator();
    const  CountryStatisticsStack = createStackNavigator();
    const  AlertStack = createStackNavigator();
    const [locationSelected, setLocationSelected] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    let handleLocationSelect = (country) => {
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
                            const iconComponent = (route.name === 'Statistics') ? AnalysisIcon : (route.name === 'Alert') ? AlertIcon : InstructionsIcon;
                                return <Image source={iconComponent} style={{opacity: focused ? 1 : .5 }} />;
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
                                           headerTitleStyle: {
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                           },
                                            headerLeft: (props) => (
                                                <TouchableWithoutFeedback onPress={() =>{setLocationSelected(false)}} >
                                                    <Text style={{backgroundColor: Colors.blue, color: 'white', paddingVertical: 6, paddingHorizontal: 8, fontSize: 16, marginLeft: 8}}>Countries</Text>
                                                </TouchableWithoutFeedback>
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
                        <Tab.Screen name="Instructions">
                            {() => (
                                <AlertStack.Navigator >
                                    <AlertStack.Screen
                                        name="Instructions"
                                        component={Instructions}
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
