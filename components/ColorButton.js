import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

//Creating a reusable component called Colorbutton
                        //Add a function property to the colorButton called onPress
export default function ColorButton({ backgroundColor, onPress = f => f }){
  return (
    <TouchableHighlight 
    style={styles.button}
    //adding onPress to the touchableHighlight making the group of elements clickable 
    //onPress property is passing the current background color
    onPress={() => onPress(backgroundColor)}
    underlayColor="orange">
      <View>
        {/* Color swatch to show what yello looks like */}
        <View style={[styles.sample, { backgroundColor }]} />
        <Text style={styles.buttonText}>{backgroundColor}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
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


