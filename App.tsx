import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import Navigation from './src/Router';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer >
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
