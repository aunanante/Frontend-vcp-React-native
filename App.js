import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import CommerceScreen from './src/screens/CommerceScreen';
import ProductScreen from './src/screens/ProductScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Business Search' }}
        />
        <Stack.Screen
          name="Commerce"
          component={CommerceScreen}
        />
        <Stack.Screen 
          name="Category"
          component={CategoryScreen}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
        />
        <Stack.Screen 
          name='Detail'
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
