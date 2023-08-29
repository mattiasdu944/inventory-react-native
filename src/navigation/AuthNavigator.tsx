import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens';


const Stack = createStackNavigator();


export const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#fff'
                }
            }}
        >
            <Stack.Screen name="Home" component={LoginScreen} />
        </Stack.Navigator>
    )
}
