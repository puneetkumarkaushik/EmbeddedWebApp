import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    <View style={styles.info}>
      <Text style={{ fontSize: 10, color: "red" }}>
        made with &hearts; by Puneet Kumar
      </Text>
      <Text style={{ fontSize: 10, color: "#0080FF" }}>
        mail@puneetkumarkaushik.tech
      </Text>
      <Text style={{ fontSize: 10, color: "#0080FF" }}>
        puneetkumarkaushik.tech
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    position: "absolute",
    bottom: 5,
    alignItems: "center",
  },
});
