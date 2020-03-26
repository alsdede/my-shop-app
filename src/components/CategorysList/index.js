import React from "react";
import { View, Image, Dimensions } from "react-native";

// import { Container } from './styles';
const { height, width } = Dimensions.get("window");

export default function CategorysList() {
    return (
        <View style={{ flex: 1, padding: 15 }}>
            <Image
                source={require("../../../assets/pizza.jpg")}
                style={{ height: 100, width: width * 0.27 }}
            />
        </View>
    );
}
