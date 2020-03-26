import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import CategoryList from "../../../components/CategorysList";
import SearchBar from "../../../components/SearchBar";
// import { Container } from './styles';
const data = [1, 2, 3, 4, 5];
export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SearchBar />
        </SafeAreaView>
    );
}
