import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Dimensions} from "react-native";

const width = Dimensions.get("screen").width - 80;


const styles = StyleSheet.create({
  
    card: {
      backgroundColor: Colors.light,
      height: 200,
      width: 340,
      marginRight: 20,
      borderRadius: 10,
      marginBottom: 20,
      padding: 15,
    },
    description: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
      color: "#293649",
    },
    tag: {
      fontSize: 16,
      fontWeight: "normal",
      marginBottom: 5,
      color: "#293649",
    },
    image: {
      height: 60,
      width: 60,
      marginRight: 5,
      right: -30,
      top: 20,
      borderRadius: 10,
      zIndex: 1,
    }
  });

  export default styles;