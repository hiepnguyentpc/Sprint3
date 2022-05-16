import { StyleSheet, Text, View, FlatList, Dimensions, TextInput } from 'react-native';
import React from 'react';

import IDCard from '../sprintScreen3/CardComponent/IDCard'
import userData from './assets/data/userData.json'
import Input from './Input/Input';

const windowWidth = Dimensions.get('window').width;

export default function App() {

  return (
    <View style={styles.container}>
      <View style = {styles.topRectangle}></View>
      <Input/>
      <FlatList
        data = {userData}
        renderItem = {({item}) => <IDCard IDData={item}/>}
        />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  topRectangle: {
    backgroundColor: '#E6492D',
    height: 90,
    width: 10000,
  },
  topNav: {
    color: "white"

  },
  
  

});
