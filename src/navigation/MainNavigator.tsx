import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { ProductScreen } from '../screens';
import { FONT } from '../constants/typography';


const Stack = createStackNavigator();

export const MainNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#FFFFFF',
                },
                headerTitleStyle: {
                    fontFamily: FONT.bold
                }
            }}
        
        >
            <Stack.Screen name="ProductsScreen" options={{ headerTitleAlign: 'center', title: 'Innova Store' }} component={ProductScreen} />
        </Stack.Navigator>
    )
}
