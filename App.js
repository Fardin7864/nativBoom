import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Welcome from "./components/welcome/Welcome.js";
import { useState } from "react";

export default function App() {
  const names = ["Rayan", "zen", "David"];
  const [show, setshow] = useState(false);
  return (
    <View style={styles.container}>
      <Button
        onPress={() => setshow(!show)}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      {(show &&
        names.map((name) => 
           <Welcome key={name} name={name} />
        )) ||
        ""}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: '20',
    alignItems: "center",
    justifyContent: "center",
  },
});
