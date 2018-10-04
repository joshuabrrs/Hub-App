import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Header, Body, Left, Right, Icon, Button, Title } from 'native-base';

import RoomScreen from './screens/RoomScreen.js';

export default RoomStackNav = createStackNavigator(
  {
    Home: {
      screen: RoomScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Rooms'
      })
    }
  }
)
