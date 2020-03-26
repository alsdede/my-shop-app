import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { isAndroid } from "../utils/platform";
import ProductsOverview from "../pages/shop/Products/ProductOverview";
import Colors from "../constants/colors";

const ShopNavigator = createStackNavigator(
    {
        ProductsOverview
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: isAndroid ? Colors.green : ""
            },
            headerTintColor: isAndroid ? "white" : Colors.green
        }
    }
);

export default createAppContainer(ShopNavigator);
