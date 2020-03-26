import React from "react";

import { useSelector } from "react-redux";
// import ProductItem from "../../../../components/Shop/Products/ProductItem";
import {
    Container,
    ProductContainer,
    ProductList,
    ProductItem,
    Name,
    Price,
    Poster,
    AddButton,
    TitleButton
} from "./styles";

const ProductOverview = props => {
    const products = useSelector(state => state.products.availableProducts);
    return (
        <Container>
            <ProductList
                data={products}
                keyExtractor={item => String(item.id)}
                renderItem={({ item: itemData }) => (
                    <ProductContainer>
                        <ProductItem>
                            <Poster source={{ uri: itemData.imageUrl }} />
                            <Name>{itemData.title}</Name>
                            <Price>R${itemData.price}</Price>
                            <AddButton>
                                <TitleButton>+</TitleButton>
                            </AddButton>
                        </ProductItem>
                    </ProductContainer>
                )}
            />
        </Container>
    );
};

ProductOverview.navigationOptions = {
    headerTitle: "All Products"
};

export default ProductOverview;
