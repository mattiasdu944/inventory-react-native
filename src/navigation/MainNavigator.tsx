import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '../hooks';
import { AuthNavigator } from './AuthNavigator';
import { DashboardNavigation } from './DashboardNavigator';
import { LoadingView } from '../components';


const Stack = createStackNavigator();

export const MainNavigator = () => {

    const { status } = useAuth();

    if( status === 'ckecking' ){
        return <LoadingView/>
    }
    
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
                status == 'authenticated'
                ? <Stack.Screen name="DashboardNavigation" component={DashboardNavigation} />
                : <Stack.Screen name="AuthNavigator" component={AuthNavigator} /> 
            }
        </Stack.Navigator>
    )
}
