import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { ProductScreen } from '../screens';
import { FONT } from '../constants/typography';
import { DashboardNavigation } from './DashboardNavigator';


const Stack = createStackNavigator();

export const MainNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#FFFFFF',
                },
                headerTitleStyle: {
                    fontFamily: FONT.bold
                }
            }}
        
        >
            <Stack.Screen 
                name="DashboardNavigation" component={DashboardNavigation} />
        </Stack.Navigator>
    )
}
