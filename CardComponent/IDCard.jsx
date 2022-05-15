import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";

const IDCard = ({IDData}) => {

  const {
    name, 
    birthdate,
    email_address,
    phone,
    hometown,
    address,
    img_url,
  } = IDData;


  return (
    <View style={{flexDirection: "row"}}>
      <Image style={styles.image} source={require("../assets/1.png")} />
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
  );
};

export default IDCard;
