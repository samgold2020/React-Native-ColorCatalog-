import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import ColorButton from './components/ColorButton';

export default function App(){
  //first is the state value, next is the funciton we use to change the state value
  const [backgroundColor, setBackgroundColor]= useState("blue");

  return(
    <View style={[styles.container, { backgroundColor }]}>
      <ColorButton backgroundColor="red" onPress={setBackgroundColor}></ColorButton>
      <ColorButton backgroundColor="green" onPress={setBackgroundColor}></ColorButton>
      <ColorButton backgroundColor="blue" onPress={setBackgroundColor}></ColorButton>
      <ColorButton backgroundColor="purple" onPress={setBackgroundColor}></ColorButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
})


