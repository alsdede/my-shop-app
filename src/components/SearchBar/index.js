import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { Container } from './styles';

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Ionicons name="ios-search" size={28} />
                <Text>Search a item...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "rgba(255,255,255,0.9)",
        width: "100%",
        height: 80
    }
});
