import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useProducts } from '../../hooks';
import { ProductCard, SearchProductInput } from '../../components';

export const ProductScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isLoading, products } = useProducts();

    if( isLoading ) {
        return <View>
            <Text>Cargando</Text>
        </View>
    }

    return (
        <ScrollView style={{ flex:1 }}>
            <SearchProductInput/>
            {
                products.map( (product) => (
                    <ProductCard key={ product.id } product={ product }/>
                ))
            }
        </ScrollView>
    )
}
