import React from 'react'
import { View, Text, ScrollView } from 'react-native';

import { useProducts } from '../../hooks';
import { GLOBAL } from '../../styles/global';
import { ProductCard, SearchProductInput, Header } from '../../components';

export const ProductScreen = () => {
    
    const { isLoading, products } = useProducts();

    if( isLoading ) {
        return <View>
            <Text>Cargando</Text>
        </View>
    }

    return (
        <ScrollView style={{ flex:1 }}>
            <View style={ GLOBAL.container }>
                <Header/>
                <SearchProductInput/>
                <View style={ GLOBAL.productList }>
                    {
                        products.map( (product) => (
                            <ProductCard key={ product._id } product={ product }/>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    )
}
