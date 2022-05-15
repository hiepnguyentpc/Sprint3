import { StyleSheet, Text, View, FlatList, Dimensions, TextInput } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import React from 'react';

import IDCard from '../sprintScreen3/CardComponent/IDCard'
import userData from './assets/data/userData.json'

const windowWidth = Dimensions.get('window').width;

export default function App() {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.container}>
      <View style = {styles.topRectangle}>

      </View>

      <View style = {styles.textInputView}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      </View>


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
    alignItems: 'center',
    justifyContent: 'center',
  },
  topRectangle: {
    backgroundColor: '#E6492D',
    height: 90,
    width: 10000,
  },
  topNav: {
    color: "white"

  },
  textInputView: {
    backgroundColor: Colors.light,
    height: 60,
    width: 1000,
    marginBottom: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});
