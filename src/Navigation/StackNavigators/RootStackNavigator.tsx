import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from 'src/Screens/Login/LoginScreen';

const RootStack = createStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
