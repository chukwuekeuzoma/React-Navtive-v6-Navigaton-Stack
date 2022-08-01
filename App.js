import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import ReviewDetails from "./Screens/ReviewDetails";
// import Navigator from "./Routes/drawer";
import * as SplashScreen from "expo-splash-screen";
import { GloblalStyles } from "./Styles/GloblalStyles";
import Home from "./Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  useCallback(async () => {
    if (!fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text>Martins Loading...</Text>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "yellow",
            },
          }}
        />
        <Stack.Screen name="Details" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
});
