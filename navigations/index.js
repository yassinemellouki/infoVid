import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
        setSelectedCountry(country);
        setLocationSelected(true);
    }

    return (
        <NavigationContainer>
            {
            !locationSelected ? 
                <LocationSelect handleLocationSelect={handleLocationSelect}/>
                : 
                <Tab.Navigator>
                        <Tab.Screen name="Statistics">
                            {() => (
                                <CountryStatisticsStack.Navigator>
                                    <CountryStatisticsStack.Screen
                                        name="Statistics"
                                        component={StatisticsScreen}
                                        initialParams={{ country: selectedCountry}}
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
                                        name="Statistics"
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
