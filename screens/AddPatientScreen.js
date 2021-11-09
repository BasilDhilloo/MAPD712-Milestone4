import React from 'react';
import { Button, Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';


const AddPatientScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.screenTitle}>Add patient</Text>
            <Icon style={styles.patientAvatar} name="person-circle" size={80} />
            <AntIcons 
                style={styles.addPatientAvatar}
                name="pluscircle" 
                size={30} />
            <Text style={styles.inputLabel}>Full Name</Text>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.inputLabel}/>
            </View>
            <Text style={styles.inputLabel}>Date of birth</Text>
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
        borderWidth: 1,
        marginBottom: 10
    }
  });
export default AddPatientScreen