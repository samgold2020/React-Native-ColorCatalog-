import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//StackNavigator renders a list of screens and passes properties to each of those screens that we can
//destructure and use to control navigation
import { createStackNavigator } from "@react-navigation/stack";

import ColorList from './components/ColorList';
import ColorDetails from './components/ColorDetails';

//destructure our call to createStackNavigator
const { Navigator, Screen } = createStackNavigator();

export default function App(){
  return(
  //When we use React Navigation the first thing we need to do is wrap everything with a Navigation Container
  <NavigationContainer>
    <Navigator>
      <Screen name="Home" 
      //title for the homescreen is "Home", if we want to change the title:
      options={{ title: "Color List"  }}
      //because colorList is rendered by the screen component it has additional props available, so we will set Navigation in colorLIst
      component={ColorList} />
      <Screen name="Details" component={ColorDetails}/>
    </Navigator>
  </NavigationContainer>
  )
}
 