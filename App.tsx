import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import { MainNavigator } from './src/navigation/MainNavigator';
import { ProductsProvider } from './src/context/products/ProductsProvider';
import { AuthProvider } from './src/context/auth/AuthProvider';
import { CategoryProvider } from './src/context/categories/CategoryProvider';

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
      <AuthProvider>
        <ProductsProvider>
          <CategoryProvider>
            <MainNavigator />
          </CategoryProvider>
        </ProductsProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}