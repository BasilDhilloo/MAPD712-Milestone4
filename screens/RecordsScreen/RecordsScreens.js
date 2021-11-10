import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';


const Stack = createNativeStackNavigator();


const RecordsHomeScreen = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>Records Screen</Text>
        </SafeAreaView>
    )
}


const RecordsScreens = ({ navigation }) => {
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                name="RecordsHomeScreen"
                component={RecordsHomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    }
  });

export default RecordsScreens;