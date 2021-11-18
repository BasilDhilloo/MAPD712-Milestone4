import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';


const Stack = createNativeStackNavigator();

const ViewPatientScreen = ({ route, navigation }) => {

    const {patient} = route.params;

    return(
        <SafeAreaView style={styles.container}>
            <Icon style={{textAlign: 'center'}} name="person-circle" size={80} />
            <Text style={styles.screenTitle}>{patient.firstName} {patient.lastName}</Text>
            <Text style={styles.dataLabel}>Age</Text>
            <Text style={styles.dataValue}>{patient.age}</Text>
            <Text style={styles.dataLabel}>Patient ID</Text>
            <Text style={{...styles.dataValue, fontSize: 24}}>{patient.id}</Text>
            <Text style={styles.dataLabel}>Patient DOB</Text>
            <Text style={styles.dataValue}>{patient.dob}</Text>
            <Text style={styles.dataLabel}>Doctor Appointed</Text>
            <Text style={styles.dataValue}>{patient.doc}</Text>
        </SafeAreaView>
    )    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        marginHorizontal: 20,
    },
    screenTitle: {
        textAlign: "center",
        fontSize: 30,
        color: "black",
        fontWeight: "bold",
        marginBottom: 30
    },
    dataLabel: {
        fontSize: 20,
    },
    dataValue: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
  });

export default ViewPatientScreen;