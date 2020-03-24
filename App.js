import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from 'react-native-elements';
import THEME from './src/theme';
import Home from './src/pages/home';
import Post from './src/pages/post';


const STACK = createStackNavigator()

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <STACK.Navigator initialRouteName="Home" screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTitleStyle: { color: 'white' }
        }}>
          <STACK.Screen name="Home" component={Home} />
          <STACK.Screen name="Post" component={Post} />
        </STACK.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
