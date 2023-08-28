import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { MainNavigator } from './src/navigation/MainNavigator';
import { ProductsProvider } from './src/context/products/ProductsProvider';



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light'/>
      <ProductsProvider>
        <MainNavigator/>
      </ProductsProvider>
    </NavigationContainer>
  );
}