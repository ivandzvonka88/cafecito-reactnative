import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation'
import {Provider} from 'react-redux'
import configureStore from './src/redux/store'

const store = configureStore()

console.disableYellowBox = true;
export default function App() {
  return (
    <View style={{flex:1}}>
      <Provider store={store}>
        <NavigationContainer>
          <Navigation/>
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
