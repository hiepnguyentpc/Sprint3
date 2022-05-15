import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import IDCard from '../sprintScreen3/CardComponent/IDCard'
import userData from './assets/data/userData.json'

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.topRectangle}>

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
    backgroundColor: 'white',
    height: 70,
  }
});
