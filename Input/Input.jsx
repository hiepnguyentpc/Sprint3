import { Text, View, TextInput } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const Input = () => {
  return (
    <View style={styles.InputView}>
      <View style={styles.inputContainer}>
        <View style={{ marginLeft: 5, marginTop: 5 }}>
          <Ionicons name="search-outline" size={30} />
        </View>
        <View style={{justifyContent: 'center', alignItems:'center', marginLeft: 100}}>
          <TextInput>Tìm kiếm đảng viên</TextInput>
        </View>
      </View>
    </View>
  );
};
export default Input;
