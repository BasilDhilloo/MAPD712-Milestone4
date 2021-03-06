/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';

import PatientsScreen from './screens/PatientsScreen/PatientScreens';
import RecordsScreens from './screens/RecordsScreen/RecordsScreens';
import SettingsScreen from './screens/SettingsScreen/SettingsScreens';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return(
    <Icon
      name="home"
      size={200}
      style={styles.homeScreen}/>
  )
}

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="home-outline" size={25} color="#4F8EF7"/>
          )
        }}/>
        <Tab.Screen 
        name="Patients" 
        component={PatientsScreen}
        options={{
          tabBarIcon: () => (
            <AntIcons name="contacts" size={25} color="#4F8EF7"/>
          )
        }}/>
        <Tab.Screen 
        name="Records" 
        component={RecordsScreens}
        options={{
          tabBarIcon: () => (
            <AntIcons name="filetext1" size={25} color="#4F8EF7"/>
          )
        }}/>
        <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="settings-outline" size={25} color="#4F8EF7"/>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  homeScreen:{
    textAlign: 'center',
    marginHorizontal: 'auto',
    paddingTop: 200
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
