import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./components/card";

export default function App() {
  const API = "https://dummyjson.com/users?limit=20";
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(
          "console :" + JSON.stringify(responseJson.users[0].maidenName),
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.texte}>FILTER</Text>
      <Card />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    /*  alignItems: "center",
     justifyContent: "center",*/
  },
  texte: {
    marginTop: 10,
    textAlign: "center",
  },
});
