import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,
         ScrollView, Dimensions, Image, Platform,
         StatusBar } from 'react-native';
import { Icon } from 'native-base';
import { createDrawerNavigator, DrawerItems } from 'react-navigation'

import HomeStackNav from './home/Home.js'
import RoomStackNav from './rooms/Rooms.js'

const {width} = Dimensions.get('window')

export default Main = createDrawerNavigator(
  {
    "Home Page": {
      screen: HomeStackNav,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="home" style={{fontSize:24, color:tintColor }} />
        ),
        
      }
    },
    Rooms: {
      screen: RoomStackNav,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="calendar" style={{fontSize:24, color:tintColor }} />
        ),
        header: {
          titleStyle: {
            alignSelf: 'center', 
          }
        }
      }
    }
  }, 
  {
    drawerWidth: width/2,
    contentOptions: {
      activeTintColor: 'orange'
    }
  }
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  }
 
});
