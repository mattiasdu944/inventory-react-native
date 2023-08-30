import React from 'react'
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useCategories } from '../../hooks';
import { GLOBAL } from '../../styles/global';
import { CategoryCard } from '../../components';

export const CategoriesScreen = () => {
    const { categories } = useCategories();
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={ GLOBAL.container }>
                {
                    categories.map(category => (
                      <CategoryCard key={ category._id } category={ category }/>
                    ))
                }
            </View>
        </ScrollView>
    )
}
