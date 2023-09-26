import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/themes/theme";
import { Home } from "./src/screens/Home";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false, 
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
