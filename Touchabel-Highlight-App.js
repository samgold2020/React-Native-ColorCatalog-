import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";



export default function App(){
  //first is the state value, next is the funciton we use to change the state value
  const [backgroundColor, setBackgroundColor]= useState("blue");

  return(
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableHighlight 
      style={styles.button}
      //adding onPress to the touchableHighlight making the group of elements clickable 
      onPress={()=> setBackgroundColor("yellow")}
      underlayColor="orange">
        <View>
          {/* Color swatch to show what yello looks like */}
          <View style={[styles.sample, { backgroundColor: "yellow"}]} />
          <Text style={styles.buttonText}>Yellow</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    //TouchabeHighlight cannot have a font size and doesn't display
    //the textAlign property
    // fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    backgroundColor: "rgba(255,255,255, 0.8)",
    // textAlign: "center",
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
  },
  sample: {
    height: 20,
    width: 20,
    backgroundColor: "white",
    //Whenever you add a borderRadius that is half of the width or height you get a circle
    borderRadius: 10,
  }
})


