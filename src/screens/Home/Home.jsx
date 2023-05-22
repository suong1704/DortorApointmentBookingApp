import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Fonts } from "../../constants";

const Home = () => {
  return (
    <View>
      <Text style={styles.container}>Home</Text>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    color: Colors.GREEN,
    fontSize: Fonts.LARGE,
    fontWeight: Fonts.DEFAULT_WEIGTH,
    marginTop: 20,
  },
});
