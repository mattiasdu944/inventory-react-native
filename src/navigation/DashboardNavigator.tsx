import { createDrawerNavigator } from '@react-navigation/drawer';
import { Octicons } from '@expo/vector-icons';

import { COLORS } from '../constants/colors';
import { FONT, SIZES } from '../constants/typography';
import { CategoriesScreen, ProductScreen, SalesScreen } from '../screens';


const Drawer = createDrawerNavigator();

export const  DashboardNavigation = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle:{
                    fontFamily: FONT.bold
                },
                sceneContainerStyle:{
                    backgroundColor: '#fff',
                },
                drawerStyle: {
                    borderTopEndRadius: 20,
                    borderBottomEndRadius: 20,
                },
                drawerLabelStyle: {
                    fontFamily: FONT.medium,
                    fontSize: SIZES.medium,
                },
                drawerItemStyle: {
                    borderRadius: 10,
                },
                drawerActiveTintColor: COLORS.primary,
                
            }}
        >   
            <Drawer.Screen 
                name="ProductsScreen" 
                options={{ 
                    title:'Innova Store',
                    drawerIcon: ({ color }) => <Octicons name="home" size={18} color={color} /> 
                }} 
                component={ProductScreen}
            />
            <Drawer.Screen 
                name="CategoriesScreen" 
                options={{ 
                    title:'Categorias',
                    drawerIcon: ({ color }) => <Octicons name="stack" size={18} color={ color } />
                }} 
                component={CategoriesScreen}
            />
            <Drawer.Screen 
                name="SalesScreen" 
                options={{ 
                    title:'Ventas',
                    drawerIcon: ({ color }) => <Octicons name="graph" size={18} color={ color } />
                }} 
                component={SalesScreen}
            />
        </Drawer.Navigator>
    );
}