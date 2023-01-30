import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Films  from './src/screens/films';



export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
      <Stack.Navigator initialRouteName="homeScreen">
        <Stack.Screen name="homeScreen" component={Home} />
        <Stack.Screen name="filmScreen" component={Films} />

      </Stack.Navigator> 
    </NavigationContainer>
    </>
  );
}



