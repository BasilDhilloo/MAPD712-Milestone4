import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';


const Stack = createNativeStackNavigator();

const SettingsScreen = ({ navigation }) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>Settings Screen</Text>
        </SafeAreaView>
    )    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    }
  });

export default SettingsScreen;