import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { MainNavigator } from './src/navigation/MainNavigator';
import { ProductsProvider } from './src/context/products/ProductsProvider';

export default function App() {

  const [fontsLoaded] = useFonts({
    'MSBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'MSRegular': require('./assets/fonts/Montserrat-Light.ttf'),
    'MSSemiBold': require('./assets/fonts/Montserrat-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <ProductsProvider>
        <MainNavigator />
      </ProductsProvider>
    </NavigationContainer>
  );
}