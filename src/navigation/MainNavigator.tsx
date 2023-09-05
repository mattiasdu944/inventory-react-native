import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { FONT } from '../constants/typography';

import { AuthNavigator } from './AuthNavigator';
import { DashboardNavigation } from './DashboardNavigator';
import { useAuth } from '../hooks';


const Stack = createStackNavigator();

export const MainNavigator = () => {

    const { status } = useAuth();
    
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
            {
                status === 'authenticated'
                ? <Stack.Screen name="DashboardNavigation" component={DashboardNavigation} />
                : <Stack.Screen name="AuthNavigator" component={AuthNavigator} /> 
            }
        </Stack.Navigator>
    )
}
