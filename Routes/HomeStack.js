import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
import Home from "../Screens/Home";
import ReviewDetails from "../Screens/ReviewDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "yellow",
      },
    },
  },
  Reviewdetails: {
    screen: ReviewDetails,
  },
};

const HomeStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerTintColor:"green",
    headerStyle: {
      backgroundColor: "yellow",
    },
  }
});

export default HomeStack;
