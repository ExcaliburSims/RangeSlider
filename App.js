import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import RangeSlider from "./components/rangeSlider";
import Card from "./components/card";

export default function App() {
  const [listItems, setListItems] = useState([]);
  const API = "https://dummyjson.com/users?limit=20";
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((responseJson) => {
        setListItems(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  /* console.log(listItems); */
  return (
    <View style={styles.container}>
      <Text style={styles.texte}>FILTER</Text>
      <RangeSlider />
      <FlatList
        data={listItems.users}
        //Item Separator View
        renderItem={Card}
        keyExtractor={(item, index) => index.toString()}
      />
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
