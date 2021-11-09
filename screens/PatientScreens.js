import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';

import AddPatientScreen from './AddPatientScreen';

const Stack = createNativeStackNavigator();

const patientsData = [
    {
        id: 1,
        firstName: "FirstName1",
        lastName: "LastName1"
    },
    {
        id: 2,
        firstName: "FirstName2",
        lastName: "LastName2"
    },
    {
        id: 3,
        firstName: "FirstName3",
        lastName: "LastName3"
    },
    {
        id: 4,
        firstName: "FirstName3",
        lastName: "LastName3"
    },
    {
        id: 5,
        firstName: "FirstName3",
        lastName: "LastName3"
    },
    {
        id: 6,
        firstName: "FirstName3",
        lastName: "LastName3"
    },
    {
        id: 7,
        firstName: "FirstName3",
        lastName: "LastName3"
    },
  ];

const PatientsHomeScreen = ({navigation}) => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Icon style={{flex: 1}} name="person-circle" size={80} />
            <Text style={styles.itemName}>{item.firstName} {item.lastName}</Text>
        </View>
      );
    return(
        <SafeAreaView style={styles.container}>
        <Text style={styles.screenTitle}>All Patients</Text>
        <AntIcons 
            style={styles.addPatientButton}
            name="pluscircle" 
            size={30} 
            onPress={()=>navigation.navigate('AddPatientScreen')}/>
        <FlatList
          data={patientsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
}


const PatientsScreen = ({ navigation }) => {
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                name="PatientsHome"
                component={PatientsHomeScreen} />
                <Stack.Screen
                name="AddPatientScreen"
                component={AddPatientScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    item: {
        flexDirection: "row",
        backgroundColor: 'lightgrey',
        padding: 5,
        marginVertical: 2,
        marginHorizontal: 15,
    },
    itemName: {
        flex: 4,
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        textAlignVertical: 'center'
    },
    screenTitle: {
        textAlign: "center",
        fontSize: 30,
        color: "black",
        fontWeight: "bold"
    },
    addPatientButton: {
        marginHorizontal: 15,
        textAlign: 'right'
    }
  });

export default PatientsScreen;