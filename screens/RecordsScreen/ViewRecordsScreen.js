import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';


const Stack = createNativeStackNavigator();

const ViewRecordsScreen = ({ route, navigation }) => {

    const {patient} = route.params;
    const [recordslist, setRecordsList] = useState([])

    const reloadRecords = () => {
        fetch(`http://192.168.0.18:5000/patients/${patient.id}/tests`, {
            method: 'GET',
            headers: {
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(recordList => {
            setRecordsList(recordList);
            ToastAndroid.showWithGravityAndOffset("Patients' list refreshed", ToastAndroid.SHORT, ToastAndroid.BOTTOM,0,200);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        reloadRecords();
    }, [navigation])



    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.screenTitle}>View Patient Records</Text>
                <Icon style={{textAlign: 'center'}} name="person-circle" size={50} />
                <Text style={styles.nameTitle}>{patient.firstName}</Text>
                <Text style={styles.nameTitle}>{patient.lastName}</Text>
                <Text style={styles.nameTitle}>{patient.address}</Text>
                <Text style={styles.nameTitle}>{patient.birthDate}</Text>


                {recordslist.length == 0 ? (<Text> No Records </Text>) : recordslist.map(record => (
                    <>
                        <Text style={styles.dataLabel}>{record.typeOfData}</Text>
                        <View style={{flexDirection:"row"}}>
                                <Icon style={{textAlign: 'center', color:'green'}} name="person-circle" size={50} />   
                            <View style={styles.textInputContainer}>
                                <Text style={styles.dataValue}>Value: {record.value}</Text>
                                <Text style={styles.dataValue}>Date: {record.date}</Text>
                                <Text style={styles.dataValue}>Time: {record.time}</Text>
                            </View> 
                        </View> 
                    </>
                ))}
                 


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