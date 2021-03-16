import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import ColorButton from './components/ColorButton';

//pages
import ColorForm from './components/ColorForm';

export default function App(){
  //first is the state value, next is the funciton we use to change the state value
  const [backgroundColor, setBackgroundColor]= useState("blue");
  //create state for colors:
  const [colors, setColors] = useState([]);

  return (
    <>
      <ColorForm 
      //pass this to the colorform component
      onNewColor={newColor => Alert.alert(`TODO: add color ${newColor}`)}/>
      <FlatList style={[styles.container, { backgroundColor }]} 
      //defaultColors is pulling in the database
      data={colors}
      //renderItem property is a function that will be envoked once for each object in our defaultColors database
      renderItem={({ item }) => {
        return(
          <ColorButton 
          key={item.id} 
          backgroundColor={item.color} 
          onPress={setBackgroundColor} />
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

