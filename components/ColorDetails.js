import React from "react";
import { View, Text, StyleSheet } from "react-native";

//react nav property route, route.params points to the params object we sent along with the request from colorList ites.color
export default function ColorDetails({ route }){
  //deconstruct route.params(got from color list)
  const { color } = route.params
  return(
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>Color Details: { color } </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  }
})