import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./BottomTabs";


const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  )
   

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});


export default App;