import { StyleSheet, Text, View, FlatList } from 'react-native';
import IDCard from '../sprintScreen3/CardComponent/IDCard'
import userData from './assets/data/userData.json'

export default function App() {
  return (
    <View style={styles.container}>
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
});
