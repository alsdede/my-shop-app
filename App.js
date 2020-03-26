import React, { useState } from "react";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Routes from "./src/routes";
import ShopNavigator from "./src/navigation/ShopNavigator";

import productsReducer from "./src/store/reducers/products";

const rootReducer = combineReducers({
    products: productsReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        // eslint-disable-next-line prettier/prettier
        "tahoma": require("./assets/fonts/Tahoma.ttf"),
        "tahoma-bold": require("./assets/fonts/Tahoma-Bold.ttf"),
        // eslint-disable-next-line prettier/prettier
        "din": require("./assets/fonts/DIN.ttf")
    });
};
export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => {
                    setFontLoaded(true);
                }}
            />
        );
    }
    return (
        <Provider store={store}>
            <ShopNavigator />
        </Provider>
    );
}
