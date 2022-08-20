import { View, StyleSheet, Image } from "react-native";
import React from "react";
import Ring from "./Ring";
import { Feather } from "@expo/vector-icons";

const COLOR = "#6E01EF";
const SIZE = 100;

const PhoneRingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map((_, index) => (
          <Ring key={index} index={index} />
        ))}
        <Feather name="phone" size={50} color={"#fff"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: COLOR,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PhoneRingScreen;
