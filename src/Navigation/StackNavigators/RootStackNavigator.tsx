import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CalculatorScreen from 'src/Screens/Calculator/CalculatorScreen';

const RootStack = createStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
