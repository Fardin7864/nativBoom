import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Signup from "./screen/signup/Signup.js";

export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Text style={{fontSize: 29}}>This is Test!</Text> */}
        <Signup/>
    </View>
  );
}
