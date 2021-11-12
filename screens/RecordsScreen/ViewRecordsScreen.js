import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';


const Stack = createNativeStackNavigator();

const ViewRecordsScreen = ({ route, navigation }) => {

    const {patient} = route.params;

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.screenTitle}>View Patient Records</Text>
                <Icon style={{textAlign: 'center'}} name="person-circle" size={50} />
                <Text style={styles.nameTitle}>{patient.firstName} {patient.lastName}</Text>
                <Text style={styles.dobLabel}>{patient.dob}</Text>

                <Text style={styles.dataLabel}>Blood Pressure</Text>
                <View style={{flexDirection:"row"}}>
                        <Icon style={{textAlign: 'center', color:'green'}} name="person-circle" size={50} />   
                    <View style={styles.textInputContainer}>
                        <Text style={styles.dataValue}>Value: {patient.records.pressure.value} X/Y mmHg</Text>
                        <Text style={styles.dataValue}>Date: {patient.records.pressure.date}</Text>
                        <Text style={styles.dataValue}>Time: {patient.records.pressure.time}</Text>
                    </View> 
                </View>  

                <Text style={styles.dataLabel}>Respiratory Rate</Text>
                <View style={{flexDirection:"row"}}>
                        <Icon style={{textAlign: 'center', color:'orange'}} name="person-circle" size={50} />   
                    <View style={styles.textInputContainer}>
                        <Text style={styles.dataValue}>Value: {patient.records.respiratory.value} X/min</Text>
                        <Text style={styles.dataValue}>Date: {patient.records.respiratory.date}</Text>
                        <Text style={styles.dataValue}>Time: {patient.records.respiratory.time}</Text>
                    </View> 
                </View>
    
                <Text style={styles.dataLabel}>Blood Oxygen Level</Text>
                <View style={{flexDirection:"row"}}>
                        <Icon style={{textAlign: 'center', color:'orange'}} name="person-circle" size={50} />   
                    <View style={styles.textInputContainer}>
                        <Text style={styles.dataValue}>Value: {patient.records.oxygen.value} %X</Text>
                        <Text style={styles.dataValue}>Date: {patient.records.oxygen.date}</Text>
                        <Text style={styles.dataValue}>Time: {patient.records.oxygen.time}</Text>
                    </View> 
                </View>
                
                <Text style={styles.dataLabel}>Heartbeat Rate</Text>
                <View style={{flexDirection:"row"}}>
                        <Icon style={{textAlign: 'center', color:'red'}} name="person-circle" size={50} />   
                    <View style={styles.textInputContainer}>
                        <Text style={styles.dataValue}>Value: {patient.records.heartbeat.value} X/min</Text>
                        <Text style={styles.dataValue}>Date: {patient.records.heartbeat.date}</Text>
                        <Text style={styles.dataValue}>Time: {patient.records.heartbeat.time}</Text>
                    </View> 
                </View>
            </ScrollView>
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
    nameTitle: {
        textAlign: "center",
        color: "black",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    dobLabel: {
        textAlign: "center",
        color: "black",
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 10
    },
    dataLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10
    },
    dataValue: {
        fontSize: 10
    }
  });

export default ViewRecordsScreen;