import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import Colors from "../../../../constants/colors";
import { windowHeight, windowWidth } from "../../../../utils/platform";

const ProductItem = props => {
    return (
        <View style={styles.product}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.price}>${props.price}</Text>
            </View>
            <View style={styles.actions}>
                <Button
                    color={Colors.green}
                    title="View details"
                    onPress={props.onViewDetail}
                />
                <Button
                    color={Colors.green}
                    title="To cart"
                    onPress={props.onAddToCart}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    product: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 5,
        backgroundColor: Colors.white,
        height: 250,
        width: windowWidth / 2.4,
        alignItems: "center"
    },
    imageContainer: {
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    details: {
        alignItems: "center",
        height: "15%",
        padding: 10
    },
    title: {
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontSize: 14,
        color: "#888"
    },
    actions: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "25%",
        paddingHorizontal: 20
    }
});
export default ProductItem;
