import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { View, Text } from "react-native";
import About from "../Screens/About";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      headerStyle: {
        title: "About Game Zone",
      },
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "green",
    headerStyle: {
      backgroundColor: "yellow",
    },
  },
});

export default AboutStack;
