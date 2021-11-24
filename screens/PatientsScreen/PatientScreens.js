import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View, SafeAreaView, StyleSheet, StatusBar, ToastAndroid } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';

import AddPatientScreen from './AddPatientScreen';
import ViewPatientScreen from './ViewPatientScreen';

const Stack = createNativeStackNavigator();

const PatientsHomeScreen = ({navigation}) => {

    const [patientsList, setPatientsList] = useState([])

    const renderItem = ({ item }) => (
        <View
            style={styles.item}>
            <Icon style={{flex: 2}} name="person-circle" size={80} />
            <Text 
                style={styles.itemName} 
                onPress={()=>navigation.navigate('ViewPatientScreen', {patient: item})}>
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
        <Text style={styles.screenTitle}>All Patients</Text>
        <View style={{flexDirection: "row"}}>
            <Icon
                style={styles.addPatientButton}
                name="reload-circle" 
                size={35} 
                onPress={reloadPatients}/>
            <View flex={8} />
            <AntIcons 
                style={styles.addPatientButton}
                name="pluscircle" 
                size={30} 
                onPress={()=>navigation.navigate('AddPatientScreen')}/>
        </View>
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
        flex: 5,
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
        marginHorizontal: 15
    }
  });

export default PatientsScreen;