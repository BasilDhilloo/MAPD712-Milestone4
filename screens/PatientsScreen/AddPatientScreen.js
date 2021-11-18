import React, { useState } from 'react';
import { Button, Text, View, SafeAreaView, StyleSheet, StatusBar, ToastAndroid } from 'react-native';
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

var mobileNumberCodes = [...Array(99).keys()].slice(1);

const AddPatientScreen = () => {

    const [genderSelected, setGenderSelected] = useState('male');
    const [selectedCountryCode, setSelectedCountryCode] = useState(0);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [birthdate, setBirthdate] = useState("");

    const getAge = (dateString) => {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const reverseDate = (date) => {
        var newdate = date.split("/").reverse().join("/");
        return newdate;
    }

    const onAddPatientClick = () => {
        const newPatient = {
            firstName: firstname,
            lastName: lastname,
            address: "Toronto",
            age: getAge(reverseDate(birthdate)),
            birthDate: birthdate,
            department: "General",
            doctor: "Dr. Drake"
        }
        fetch('http://192.168.2.16:5000/patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPatient)
        })
        .then(response => {
            console.log(response.status)
            if(response.status == 201) {
                ToastAndroid.showWithGravityAndOffset("Success! Patient added.", 
                                ToastAndroid.SHORT, ToastAndroid.BOTTOM,0,200);
                setFirstname("");
                setLastname("");
                setBirthdate("");
            } else {
                ToastAndroid.showWithGravityAndOffset(`Error! Something went wrong`, 
                                ToastAndroid.SHORT, ToastAndroid.BOTTOM,0,200);
            }
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
            ToastAndroid.showWithGravityAndOffset("Oops! Something went wrong", 
                            ToastAndroid.SHORT, ToastAndroid.BOTTOM,0,200);
        })
    }

    const birthDateChange = (text) => {
        if(text.length == (birthdate.length+1)){
            if ((text.length == 2) || (text.length == 5)){
                text = text + "/"
            }
        }
        setBirthdate(text)
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.screenTitle}>Add patient</Text>
                <Icon style={styles.patientAvatar} name="person-circle" size={80} />
                <AntIcons 
                    style={styles.addPatientAvatar}
                    name="pluscircle" 
                    size={30} />
                <Text style={styles.inputLabel}>Full Name</Text>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.textInputContainer}>
                        <TextInput 
                            style={styles.inputLabel} 
                            value={firstname}
                            onChangeText={text => setFirstname(text)}
                            placeholder="First Name"/>
                    </View>
                    <View style={{flex:1}}/>
                    <View style={styles.textInputContainer}>
                        <TextInput 
                            style={styles.inputLabel} 
                            value={lastname}
                            onChangeText={text => setLastname(text)}
                            placeholder="Last Name"/>
                    </View>
                </View>
                <Text style={styles.inputLabel}>Date of birth</Text>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        style={styles.inputLabel} 
                        value={birthdate}
                        onChangeText={text => birthDateChange(text)}
                        maxLength={10}
                        placeholder="dd/mm/yyyy"/>
                </View>
                <Text style={styles.inputLabel}>Gender</Text>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex: 1, flexDirection:"row"}}>
                        <RadioButton />
                        <Text style={{textAlignVertical: 'center', marginLeft: 5}}>Male</Text>
                    </View>
                    <View style={{flex: 1, flexDirection:"row"}}>
                        <RadioButton />
                        <Text style={{textAlignVertical: 'center', marginLeft: 5}}>Female</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row", marginTop: 5, marginBottom: 10}}>
                        <RadioButton />
                        <Text style={{textAlignVertical: 'center', marginLeft: 5}}>Choose not to specify</Text>
                </View>
                <Text style={styles.inputLabel}>Email address</Text>
                <View style={styles.textInputContainer}>
                    <TextInput style={styles.inputLabel}/>
                </View>
                <Text style={styles.inputLabel}>Mobile Number</Text>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex: 2, flexDirection:"column"}}>
                        <Picker
                            selectedValue={selectedCountryCode}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedCountryCode(itemValue) }>
                                {mobileNumberCodes.map((item) => {
                                    var lab = "+" + item;
                                    return <Picker.Item label={lab} value={item} key={item}/> 
                                }
                            )}
                        </Picker>
                    </View>
                    <View style={{...styles.textInputContainer, flex: 5}}>
                        <TextInput style={styles.inputLabel}/>
                    </View>
                </View>
                <View style={styles.saveButton}>
                <Button 
                    title="   SAVE   "
                    onPress={onAddPatientClick}/>
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
    },
    textInputContainer: {
        flex:10,
        borderWidth: 1,
        marginBottom: 10
    },
    saveButton: {
        alignSelf: 'center',
        marginTop:10,
    }
  });
export default AddPatientScreen
