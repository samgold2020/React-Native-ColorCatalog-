import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { generate } from "shortid";

//pages
import ColorButton from './ColorButton';
import ColorForm from './ColorForm';

//Isolating functinality into a custom hook for creating a new list of colors and add colors to our list
  //Custom hooks are great because they separate the functionality from the presentation and are reusable in other components 
const useColors = () => {
  //create state for colors:
  const [colors, setColors] = useState([]);
  //function for adding colors to our list
  const addColor = color => {
    //When a user adds a new color we wil generate a unique identifier
    const newColor = { id: generate(), color }
    //Take the new color and add it to the list of colors: 
      //invoke setColors function which gets a new array which contains the newColor AND the rest of the colors that already exist
      //the three dots are the array spread operator. It takes all of the colors that are currently in the array and add them to the end of the new array
    setColors([ newColor, ...colors])
  };
  //expose the list of colors and the add color function to the consumer of this hook, which is App.js
  return { colors, addColor }
}

export default function ColorList({ navigation }){
  //first is the state value, next is the funciton we use to change the state value
  // const [backgroundColor, setBackgroundColor]= useState("blue");
  //colors and addColor 
  const { colors, addColor } = useColors();
  
  return (
    <>
      <ColorForm 
      //pass this to the colorform component
      onNewColor={addColor}/>
      <FlatList style={[styles.container]} 
      //defaultColors is pulling in the database
      data={colors}
      //renderItem property is a function that will be envoked once for each object in our defaultColors database
      renderItem={({ item }) => {
        return(
          <ColorButton 
          key={item.id} 
          backgroundColor={item.color} 
          onPress={() => {
            //navigate to the "Details" page onPress
            //here we can also include any other information we want passed with the onPress
            navigation.navigate("Details", {color: item.color})
          }}
          />
        )
      }} 
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  }
})

//a FlatList expects an array of data which it is getting from the defaultColors data

