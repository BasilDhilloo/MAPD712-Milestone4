import React, { useState } from 'react';
import { Button, Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function RadioButton(props) {
    return (
        <View style={[{
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
        }, props.style]}>
          {
            props.selected ?
              <View style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#000',
              }}/>
              : null
          }
        </View>
    );
  }

var amPM = ["AM","PM"];
var dataType = ["Blood Pressure (X/Y mmHg)","Respiratory Rate (X/min)","Blood Oxygen Level (X%)","Heartbeat Rate (X/min)"];

// var recordsData = [{
//     patientId: "001",
//     date: "30th August, 2004",
//     time: "04:10pm",
//     typeOfData: "Blood Pressure",
//     value: "110bpm"
//     },{
//     patientId: "001",
//     date: "30th August, 2004",
//     time: "04:10pm",
//     typeOfData: "Heart Rate",
//     value: "90 per minute"
//     }
// ]

var patientsData = [
    {
        id: "SK-0033111",
        firstName: "Dominic",
        lastName: "King",
        dob: "30 Oct, 1965",
        doc: "Dr. Max Manning",
        records:
        {
            pressure:
            {
                date:"29 Jan, 1999",
                time:"11:12",
                value:"64"
            },
            respiratory:
            {
                date:"25 Dec, 2000",
                time:"10:12",
                value:"54"
            },
            oxygen:
            {
                date:"18 Oct, 2005",
                time:"08:12",
                value:"44"
            },
            heartbeat:
            {
                date:"06 Nov, 2010",
                time:"09:12",
                value:"34"
            }
        }
    },
    {
        id: "SK-0033112",
        firstName: "Jane",
        lastName: "Lawrence",
        dob: "5 June, 1965",
        doc: "Dr. Max Manning",
        records:
        {
            pressure:
            {
                date:"29 Jan, 1999",
                time:"11:12",
                value:"64"
            },
            respiratory:
            {
                date:"25 Dec, 2000",
                time:"10:12",
                value:"54"
            },
            oxygen:
            {
                date:"18 Oct, 2005",
                time:"08:12",
                value:"44"
            },
            heartbeat:
            {
                date:"06 Nov, 2010",
                time:"09:12",
                value:"34"
            }
        }
    },
    {
        id: "SK-0033113",
        firstName: "Max",
        lastName: "Manning",
        dob: "2 Jan, 1989",
        doc: "Dr. Max Manning",
        records:
        {
            pressure:
            {
                date:"29 Jan, 1999",
                time:"11:12",
                value:"64"
            },
            respiratory:
            {
                date:"25 Dec, 2000",
                time:"10:12",
                value:"54"
            },
            oxygen:
            {
                date:"18 Oct, 2005",
                time:"08:12",
                value:"44"
            },
            heartbeat:
            {
                date:"06 Nov, 2010",
                time:"09:12",
                value:"34"
            }
        }
    },
    {
        id: "SK-0033114",
        firstName: "Hannah",
        lastName: "Sharp",
        dob: "30 March, 1965",
        doc: "Dr. Max Manning",
        records:
        {
            pressure:
            {
                date:"29 Jan, 1999",
                time:"11:12",
                value:"64"
            },
            respiratory:
            {
                date:"25 Dec, 2000",
                time:"10:12",
                value:"54"
            },
            oxygen:
            {
                date:"18 Oct, 2005",
                time:"08:12",
                value:"44"
            },
            heartbeat:
            {
                date:"06 Nov, 2010",
                time:"09:12",
                value:"34"
            }
        }
    },
    {
        id: "SK-0033115",
        firstName: "Jack",
        lastName: "Piper",
        dob: "6 July, 1965",
        doc: "Dr. Max Manning",
        records:
        {
            pressure:
            {
                date:"29 Jan, 1999",
                time:"11:12",
                value:"64"
            },
            respiratory:
            {
                date:"25 Dec, 2000",
                time:"10:12",
                value:"54"
            },
            oxygen:
            {
                date:"18 Oct, 2005",
                time:"08:12",
                value:"44"
            },
            heartbeat:
            {
                date:"06 Nov, 2010",
                time:"09:12",
                value:"34"
            }
        }
    },
    {
        id: "SK-0033116",
        firstName: "Colin",
        lastName: "Ferguson",
        dob: "30 Oct, 1965",
        doc: "Dr. Max Manning",
        records:
        {
            pressure:
            {
                date:"29 Jan, 1999",
                time:"11:12",
                value:"64"
            },
            respiratory:
            {
                date:"25 Dec, 2000",
                time:"10:12",
                value:"54"
            },
            oxygen:
            {
                date:"18 Oct, 2005",
                time:"08:12",
                value:"44"
            },
            heartbeat:
            {
                date:"06 Nov, 2010",
                time:"09:12",
                value:"34"
            }
        }
    },
    {
        id: "SK-0033117",
        firstName: "Maria",
        lastName: "Martin",
        dob: "30 Oct, 1965",
        doc: "Dr. Max Manning",
        records:
        {
            pressure:
            {
                date:"29 Jan, 1999",
                time:"11:12",
                value:"64"
            },
            respiratory:
            {
                date:"25 Dec, 2000",
                time:"10:12",
                value:"54"
            },
            oxygen:
            {
                date:"18 Oct, 2005",
                time:"08:12",
                value:"44"
            },
            heartbeat:
            {
                date:"06 Nov, 2010",
                time:"09:12",
                value:"34"
            }
        }
    },
  ];

const AddRecordsScreen = () => {

    const [selectedAmPm, setselectedAmPm] = useState(0);
    const [selectedDataType, setselectedDataType] = useState(0);
    const [selectedPatient, setselectedPatient] = useState(0);


    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.screenTitle}>Add Records</Text>
                <Text style={styles.inputLabel}>Patient Name</Text>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.divStyle}>
                        <Picker
                            selectedValue={selectedPatient}
                            onValueChange={(itemValue, itemIndex) =>
                                setselectedPatient(itemValue) }>
                                {patientsData.map((item) => {
                                    var lab = item.firstName + " " + item.lastName;
                                    return <Picker.Item label={lab} value={item.id} key={item.id}/> 
                                }
                            )}
                        </Picker>
                    </View>
                </View>

                
                
                <Text style={styles.inputLabel}>Date</Text>
                <View style={styles.textInputContainer}>
                    <TextInput style={styles.inputLabel} placeholder="mm/dd/yyyy"/>
                </View>
                
                <Text style={styles.inputLabel}>Time [24H]</Text>
                <View style={{flexDirection:"row"}}>
                <View style={styles.textInputContainer}>
                    <TextInput style={styles.inputLabel} placeholder="Hours"/>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput style={styles.inputLabel} placeholder="Minutes"/>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput style={styles.inputLabel} placeholder="Seconds"/>
                </View>
                    <View style={{flex: 1, flexDirection:"column", borderWidth:1, borderColor:"black", height:63.5}}>
                        <Picker
                            selectedValue={selectedAmPm}
                            onValueChange={(itemValue, itemIndex) =>
                                setselectedAmPm(itemValue) }>
                                {amPM.map((item) => {
                                    return <Picker.Item label={item} value={item} key={item}/> 
                                }
                            )}
                        </Picker>
                    </View>
                </View>
                <Text style={styles.inputLabel}>Record Type</Text>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.divStyle}>
                        <Picker
                            selectedValue={selectedDataType}
                            onValueChange={(itemValue, itemIndex) =>
                                setselectedDataType(itemValue) }>
                                {dataType.map((item) => {
                                    return <Picker.Item label={item} value={item} key={item}/> 
                                }
                            )}
                        </Picker>
                    </View>
                </View>
                <Text style={styles.inputLabel}>Reading/Value</Text>
                <View style={styles.textInputContainer}>
                    <TextInput style={styles.inputLabel} placeholder="Value"/>
                </View>
                <View style={styles.saveButton}>
                <Button 
                    title="   SAVE   "/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        marginHorizontal: 10
    },
    screenTitle: {
        textAlign: "center",
        fontSize: 30,
        color: "black",
        fontWeight: "bold"
    },
    patientAvatar: {
        textAlign: 'center',
    },
    addPatientAvatar: {
        marginTop: -30,
        marginRight: -40,
        textAlign: 'center',
    },
    inputLabel: {
        fontSize: 20,
        marginTop:10,
        marginBottom: 3
    },
    textInputContainer: {
        borderWidth: 1,
        marginBottom: 10
    },
    saveButton: {
        alignSelf: 'center',
        marginTop:10
    },
    divStyle: {
        flex: 2, 
        flexDirection:"column", 
        borderWidth:1, 
        borderColor:"black"
    }
  });
export default AddRecordsScreen