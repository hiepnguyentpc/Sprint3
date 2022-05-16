import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({

    InputView: {
        flexDirection: "row",
        height: 60,
        marginBottom: 30,
        backgroundColor: "#F2F2F2",
        justifyContent: "center",
        alignItems: "center"
      },
      inputContainer: {
        backgroundColor: "white",
        height: 40,
        width: 400,
        borderRadius: 5,
        flexDirection: "row",
      },
      label:{
          marginVertical: 5,
          fontSize: 14,
      }

});

export default styles