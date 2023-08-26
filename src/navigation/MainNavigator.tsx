import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { ProductScreen } from '../screens';


const Stack = createStackNavigator();

export const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProductsScreen" component={ProductScreen} />
        </Stack.Navigator>
    )
}
