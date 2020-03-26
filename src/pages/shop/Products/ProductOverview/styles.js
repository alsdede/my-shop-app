import styled from "styled-components/native";
import { Button } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Colors } from "../../../../constants/colors";

export const Container = styled.SafeAreaView`
    flex: 1;
`;
export const ProductContainer = styled.View.attrs({
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.8,

    elevation: 5
})`
    flex: 1;
`;

export const ProductList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    numColumns: 2
})`
    margin-top: 30px;
    margin-bottom: 5px;
    padding: 0 20px;
`;

export const ProductItem = styled(RectButton).attrs({})`
    background: #fff;
    border-radius: 4px;
    flex: 1;
    align-items: center;
    margin: 0 5px 20px;
    height: 260px;
`;

export const Poster = styled.Image`
    height: 60%;
    width: 100%;
`;

export const Name = styled.Text.attrs({
    numberOfLines: 1
})`
    font-size: 16px;
    padding: 2px;
    margin-top: 15px;
`;

export const Price = styled.Text`
    margin-top: 10px;
    font-weight: 700;
`;

export const AddButton = styled.TouchableOpacity.attrs({})`
    background: #156;

    border-radius: 5px;
    padding: 5px;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

export const TitleButton = styled.Text`
    margin: 0 5px;
    font-size: 20px;
    color: #fff;
`;
