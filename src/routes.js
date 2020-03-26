import React from "react";
import { View } from "react-native";
import {
    createAppContainer,
    createSwitchNavigator,
    createBottomTabNavigator
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./pages/shop/Home";
import colors from "./constants/colors";
// import { Container } from './styles';

const Routes = createStackNavigator(
    {
        Home
    },
    {
        defaultNavigationOptions: {
            headerShown: false,
            headerStyle: {}
        }
    }
);

export default createAppContainer(Routes);
