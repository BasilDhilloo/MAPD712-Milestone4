import React, { useState } from 'react';
import { Button, Text, View, SafeAreaView, StyleSheet, StatusBar, ToastAndroid } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';

var mobileNumberCodes = [...Array(99).keys()].slice(1);

const AddPatientScreen = () => {

    const [selectedCountryCode, setSelectedCountryCode] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [doctor, setDoctor] = useState("");

    const resetInputs = () => {
        setSelectedCountryCode(0);
        setFirstname("");
        setLastname("");
        setBirthdate("");
        setGender("");
        setEmail("");
        setDoctor("");
        setContactNumber("");
    }

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
            doctor: doctor
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
                resetInputs();
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
                    <View style={{flex: 3, flexDirection:"column"}}>
                            <Picker
                                selectedValue={gender}
                                onValueChange={(itemValue, itemIndex) =>
                                    setGender(itemValue) }>
                                    <Picker.Item label="Male" value="male" key="male"/> 
                                    <Picker.Item label="Female" value="female" key="female"/> 
                                    <Picker.Item label="Prefer not to disclose" value="not_disclosed" key="nd"/> 
                            </Picker>
                    </View>
                    <View style={{flex: 2, flexDirection:"column"}}>
                    </View>
                </View>
                    <Text style={styles.inputLabel}>
                            Email address
                    </Text>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        value={email}
                        onChangeText={text => setEmail(text)} 
                        style={styles.inputLabel}/>
                </View>
                <Text style={styles.inputLabel}>Mobile Number</Text>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex: 4, flexDirection:"column"}}>
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
                    <View style={{...styles.textInputContainer, flex: 8}}>
                        <TextInput 
                            value={contactNumber}
                            onChangeText={text => setContactNumber(text)} 
                            style={styles.inputLabel}/>
                    </View>
                </View>
                <Text style={styles.inputLabel}>Doctor</Text>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex: 1, flexDirection:"column"}}>
                            <Picker
                                selectedValue={doctor}
                                onValueChange={(itemValue, itemIndex) =>
                                    setDoctor(itemValue) }>
                                    <Picker.Item label="Dr. Rakesh Jha" value="Dr. Rakesh Jha" key="rakesh"/> 
                                    <Picker.Item label="Dr. Max Manning" value="Dr. Max Manning" key="max"/> 
                                    <Picker.Item label="Dr. Wang Chu" value="Dr. Wang Chu" key="wang"/> 
                            </Picker>
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
        fontSize: 15,
    },
    textInputContainer: {
        flex:10,
        borderWidth: 1,
        marginBottom: 5,
        height: 40
    },
    saveButton: {
        alignSelf: 'center',
        marginTop:0,
    }
  });
export default AddPatientScreen
