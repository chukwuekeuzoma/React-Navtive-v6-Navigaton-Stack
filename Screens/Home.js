import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { GloblalStyles } from "../Styles/GloblalStyles";

function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Martins List", Rating: 5000, body: "lorem ipesum", key: 1 },
    { title: "Oliver List", Rating: 3000, body: "lorem ipesum", key: 2 },
    { title: "Ikenna List", Rating: 100, body: "lorem ipesum", key: 3 },
  ]);

  return (
    <View style={styles.container}>
      <Text style={GloblalStyles.titleText}>you can click on the List</Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <Text style={GloblalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
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

export default Home;
