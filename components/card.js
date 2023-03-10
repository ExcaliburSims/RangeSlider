import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";

const card = ({ item }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.mainCardView}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginLeft: 12 }}>
            <Text
              style={{
                fontSize: 14,
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {item.id}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {item.firstName}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {item.maidenName}
            </Text>
            <View
              style={{
                marginTop: 4,
                borderWidth: 0,
                width: "85%",
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: 12,
                }}
              >
                {item.age + " ans"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainCardView: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
});
