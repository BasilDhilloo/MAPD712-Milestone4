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

    useEffect(() => {
        setPatientsList(patientsData)
    }, [])

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