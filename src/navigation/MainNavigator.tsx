import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { FONT } from '../constants/typography';

import { AuthNavigator } from './AuthNavigator';
import { DashboardNavigation } from './DashboardNavigator';


const Stack = createStackNavigator();

export const MainNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='AuthNavigator'
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#FFFFFF',
                }
            }}
        
        >
            <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
            <Stack.Screen name="DashboardNavigation" component={DashboardNavigation} />
        </Stack.Navigator>
    )
}
