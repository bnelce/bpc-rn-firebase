import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#7159c1' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: 'Usuários' }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: 'Crie sua conta' }}
      />
    </Stack.Navigator>
  );
}
