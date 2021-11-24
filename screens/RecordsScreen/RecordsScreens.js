import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';

import AddRecordsScreen from './AddRecordsScreen';
import ViewRecordsScreen from './ViewRecordsScreen';


const Stack = createNativeStackNavigator();

var patientsData = [
    {
        id: "SK-0033111",
        firstName: "Jon",
        lastName: "Snow",
        address: "23 Lnaor Redgrave",
        age: "32",
        birthDate: "21-08-1991",
        department: "Dental",
        doctor: "Jay-z",
    },
    {
        id: "SK-0033112",
        firstName: "Kim",
        lastName: "Kardashion",
        address: "32 WentWorht",
        age: "31",
        birthDate: "31-3-1992",
        department: "Kidney",
        doctor: "Dre",        
    },
    {
        id: "SK-0033113",
        firstName: "Ali",
        lastName: "Hassan",
        address: "34 Gt, LA",
        age: "30",
        birthDate: "03-3-1993",
        department: "Ortho",
        doctor: "Dr Snoop",
    }
  ];

  

const RecordsHomeScreen = ({navigation}) => {

    const [patientsList, setPatientsList] = useState([])

    const renderItem = ({ item }) => (
        <View
            style={styles.item}>
            <Icon style={{flex: 2}} name="person-circle" size={80} />
            <Text 
                style={styles.itemName} 
                onPress={()=>navigation.navigate('ViewRecordsScreen', {patient: item})}>
                {item.firstName} {item.lastName}
            </Text>
        </View>
      );

      const reloadPatients = () => {
        fetch('http://192.168.0.18:5000/patients', {
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
                    age: patient.age,
                    dob: patient.birthDate,
                    doc: patient.doctor
                }]
            })
            setPatientsList(newPatientData);
            ToastAndroid.showWithGravityAndOffset("Patients' list refreshed", ToastAndroid.SHORT, ToastAndroid.BOTTOM,0,200);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        reloadPatients();
    }, [navigation])

    return(
        <SafeAreaView style={styles.container}>
        <Text style={styles.screenTitle}>Records Screen</Text>
        <AntIcons 
            style={styles.addPatientButton}
            name="pluscircle" 
            size={30} 
            onPress={()=>navigation.navigate('AddRecordsScreen')}/>
        <FlatList
          data={patientsList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
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
                <Stack.Screen
                name="AddRecordsScreen"
                component={AddRecordsScreen} />
                <Stack.Screen
                name="ViewRecordsScreen"
                component={ViewRecordsScreen} />
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
        flex: 5,
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        textAlignVertical: 'center',
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

export default RecordsScreens;