import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { FlatList,TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';


const Stack = createNativeStackNavigator();

const SettingsScreen = ({ navigation }) => {

    const settingsOptions = [
        {title: 'My Info', subTitle: 'Setup your profile', onPress: () => {}},
        {title: 'Accounts', subTitle: null, onPress: () => {}},
        {title: 'Default account for New Patients',subTitle: "Inventory", onPress: () => {},},
        {title: 'Patients to display', subTitle: 'All patient', onPress: () => {}},
        {title: 'Sort Patients by',subTitle: "sortBy",onPress: () => {}},
        {title: 'Patients Data', subTitle: 'First name first', onPress: () => {}},
        {title: 'Import Patients Data', subTitle: null, onPress: () => {}},
        {title: 'Export Patients Data (PDF)', subTitle: null, onPress: () => {}},
        {title: 'Administrator Info', subTitle: null, onPress: () => {}},
        {title: 'App Info', subTitle: null, onPress: () => {}},
      ];

    return(
    <>
          {/* <View>
            {settingsOptions.map(({name, selected, onPress}) => (
              <View key={name}>
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 5,
                    alignItems: 'center',
                  }}>
                  {selected && <Icon size={17} name="check" type="material" />}
                  <Text style={{fontSize: 17, paddingLeft: selected ? 15 : 30}}>
                    {name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View> */}
      
        <ScrollView style={{backgroundColor: "white"}}>
            {settingsOptions.map(({title, subTitle, onPress}, index) => (
          <TouchableOpacity key={title} onPress={onPress}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingBottom: 20,
                paddingTop: 20,
              }}>
              <Text style={{fontSize: 17}}>{title}</Text>
              {subTitle && (
                <Text style={{fontSize: 14, opacity: 0.5, paddingTop: 5}}>
                  {subTitle}
                </Text>
              )}
            </View>

            <View style={{height: 0.5, backgroundColor: "grey"}} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
        // <SafeAreaView style={styles.container}>
        //     <Text>Settings Screen</Text>
        // </SafeAreaView>
    )    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    }
  });

export default SettingsScreen;