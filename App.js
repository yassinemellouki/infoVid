import React,  {useState} from 'react';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from "./navigations"
import {AppLoading} from "expo";


export default function App({skipLoadingScreen}) {
    const [ isReady, setIsReady ] = useState(false)

	const loadResourcesAsync = async () => {
		await Promise.all([
			Asset.loadAsync([
				require('./assets/worldmap.png'),
			]),
			Font.loadAsync({
				'opensans-bold': require('./assets/font/Open_Sans/OpenSans-Bold.ttf'),
				'opensans-reuglar': require('./assets/font/Open_Sans/OpenSans-Regular.ttf'),
				'opensans-light': require('./assets/font/Open_Sans/OpenSans-Light.ttf'),
				'roboto-bold': require('./assets/font/Roboto/Roboto-Bold.ttf'),
				'roboto-regular': require('./assets/font/Roboto/Roboto-Regular.ttf'),
				'roboto-light': require('./assets/font/Roboto/Roboto-Light.ttf'),
                // IconMon Icons
				'IcoMoon': require('./assets/font/Icons/icomoon.ttf'),
			}),
		]);
	}

	const handleLoadingError = (error) => {
		console.error(error);
	}

    const handleFinishLoading = () => {
        console.log("finished loading")
        setIsReady(true);
    }

  return (
      <>
            {
                !isReady ? 
                <AppLoading
                    startAsync={loadResourcesAsync}
                    onError={handleLoadingError}
                    onFinish={handleFinishLoading}
                />
                : 
                <AppContainer /> 
            }
      </>
  );
}
