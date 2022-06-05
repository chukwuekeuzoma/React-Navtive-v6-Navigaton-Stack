import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GloblalStyles } from "../Styles/GloblalStyles";

function ReviewDetails({ navigation,route }) {  
   const {title,Rating,body } = route.params;

  return (
    <View style={styles.container}>
      <Text style={GloblalStyles.titleText}>
        {title}
      </Text>
      <Text style={GloblalStyles.titleText}>
        {Rating}
      </Text>
      <Text style={GloblalStyles.titleText}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ReviewDetails;
