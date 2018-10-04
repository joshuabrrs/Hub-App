import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Header, Body, Left, Right, Icon, Button, Title } from 'native-base';

import HomeScreen from './screens/HomeScreen.js';

export default HomeStackNav = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Home'
      })
    }
  }, {
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center' //if style using flexbox
}
  }
)
