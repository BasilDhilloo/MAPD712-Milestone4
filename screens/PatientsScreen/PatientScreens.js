import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';

import AddPatientScreen from './AddPatientScreen';
import ViewPatientScreen from './ViewPatientScreen';

const Stack = createNativeStackNavigator();

var patientsData = [
    {
        id: "SK-0033111",
        firstName: "Dominic",
        lastName: "King",
        dob: "30 Oct, 1965",
        doc: "Dr. Max Manning"
    },
    {
        id: "SK-0033112",
        firstName: "Jane",
        lastName: "Lawrence",
        dob: "5 June, 1965",
        doc: "Dr. Max Manning"
    },
    {
        id: "SK-0033113",
        firstName: "Max",
        lastName: "Manning",
        dob: "2 Jan, 1989",
        doc: "Dr. Max Manning"
    },
    {
        id: "SK-0033114",
        firstName: "Hannah",
        lastName: "Sharp",
        dob: "30 March, 1965",
        doc: "Dr. Max Manning"
    },
    {
        id: "SK-0033115",
        firstName: "Jack",
        lastName: "Piper",
        dob: "6 July, 1965",
        doc: "Dr. Max Manning"
    },
    {
        id: "SK-0033116",
        firstName: "Colin",
        lastName: "Ferguson",
        dob: "30 Oct, 1965",
        doc: "Dr. Max Manning"
    },
    {
        id: "SK-0033117",
        firstName: "Maria",
        lastName: "Martin",
        dob: "30 Oct, 1965",
        doc: "Dr. Max Manning"
    },
  ];

const PatientsHomeScreen = ({navigation}) => {

    const [patientsList, setPatientsList] = useState([])

    const renderItem = ({ item }) => (
        <View
            style={styles.item}>
            <Icon style={{flex: 1}} name="person-circle" size={80} />
            <Text 
                style={styles.itemName} 
                onPress={()=>navigation.navigate('ViewPatientScreen', {patient: item})}>
                {item.firstName} {item.lastName}
            </Text>
        </View>
      );

    useEffect(() => {
        fetch('http://192.168.2.22:5000/patients', {
            method: 'GET',
            headers: {
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(patientList => {
            var newPatientData = []
            patientList.map((patient) => {
                newPatientData = [...newPatientData, {
                    id: patient._id,
                    firstName: patient.firstName,
                    lastName: patient.lastName,
                    dob: patient.birthDate,
                    doc: patient.doctor
                }]
            })
            setPatientsList(newPatientData);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return(
        <SafeAreaView style={styles.container}>
        <Text style={styles.screenTitle}>All Patients</Text>
        <AntIcons 
            style={styles.addPatientButton}
            name="pluscircle" 
            size={30} 
            onPress={()=>navigation.navigate('AddPatientScreen')}/>
        <FlatList
          data={patientsList}
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
                <Stack.Screen
                name="ViewPatientScreen"
                component={ViewPatientScreen} />
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