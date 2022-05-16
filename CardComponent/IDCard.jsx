import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const IDCard = ({ IDData }) => {
  const { name, birthdate, email_address, phone, hometown, address, image } =
    IDData;

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.image} source={{ url: image }} />
        <View style={styles.card}>
          <View style={{ flexDirection: "column", marginLeft: 25, top: 4 }}>
            <Text style={styles.description}>{name}</Text>
            <Text style={styles.tag}>
              Ngày sinh:
              <Text style={styles.description}>{birthdate}</Text>
            </Text>
            <Text style={styles.tag}>
              Email:
              <Text style={styles.description}>{email_address}</Text>
            </Text>
            <Text style={styles.tag}>
              Số điện thoại:
              <Text style={styles.description}>{phone}</Text>
            </Text>
            <Text style={styles.tag}>
              Quê quán:
              <Text style={styles.description}>{hometown}</Text>
            </Text>
            <Text style={styles.tag}>
              Nơi cư trú:
              <Text style={styles.description}>{address}</Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", zIndex: 1, top: -65, right: -50 }}>
        <View style={styles.roleTag}>
          <Text style={styles.roleDescription}>Bí thư</Text>
        </View>

        <View style={styles.CircleShapeView}>
          <Ionicons name="call" size={25} />
        </View>

        <View style={styles.CircleShapeView}>
          <Ionicons name="chatbox" size={25} />
        </View>
      </View>
    </View>
  );
};

export default IDCard;
