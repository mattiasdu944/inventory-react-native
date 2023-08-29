import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useProducts } from '../../hooks';
import { ProductCard, SearchProductInput } from '../../components';
import { GLOBAL } from '../../styles/global';

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
            <View style={ GLOBAL.container }>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
                    <View>
                        <Text style={ GLOBAL.title }>Bienvenido</Text>
                        <Text style={ GLOBAL.subTitle }>Innova Code</Text>
                    </View>
                    <Image
                        source={require( '../../../assets/profile.png') }
                        style={{ width:50, height: 50, borderWidth: 1, borderRadius: 100, borderColor:'rgba(0,0,0,0.15)' }}
                    />
                </View>
            <SearchProductInput/>
                <View style={ GLOBAL.productList }>
                    {
                        products.map( (product) => (
                            <ProductCard key={ product.id } product={ product }/>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    )
}
