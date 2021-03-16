import React, { useState, useRef } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

export default function ColorForm({ onNewColor=f => f }) {
  //Save the current input value in state
  const [inputValue, setValue] = useState("");
  //useRef hook returns a mutable ref object whose .current property is initialized to the passed argument (initialValue)
  const input = useRef()
  console.log(input)

  return (
    <View style={styles.container}>
      <TextInput style={styles.txtInput}
      //refer to the text input:
      ref={input}
      //Set the value to the inputValue
      value={inputValue} 
      //When  the user changes that value we are going to capture 
        //This property is a function and will pass the current value of the text input to the function as an argument
        //So the text is passed into the setValue funciton as an argument which will cause our Input to change 
      // onChangeText={text => setValue(text)}
        //BUT since we are just setting the setValue change to the onChangeText function we can write it this way:
      onChangeText={setValue}
      autoCapitalize="none"
      placeholder="enter a color..."/>
      {/* //capture the value when the user presses add */}
      <Button title="Add"
      onPress={() => {
        if (inputValue.length >= 1) {
        //removes the keyboard focus from the current elemenet, aka the input
        input.current.blur()
        //call the onNewColor function
        onNewColor(inputValue);
        //returns the blank setValue with the placeholder
        setValue("") }
        else {
          Alert.alert("Please enter a color")
        }
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  txtInput: {
    flex: 1,
    borderWidth: 2,
    fontSize: 20,
    margin: 5,
    borderRadius: 5,
    padding: 5,
  }
}) 