import AppStateHandler, {useAppState} from 'src/StateHandlers/AppStateHandler';
import React, {useLayoutEffect} from 'react';

import {ActivityIndicator} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './StackNavigators/AuthStackNavigator';
import RootStackNavigator from './StackNavigators/RootStackNavigator';
import Center from 'src/Components/Shared/Center/Center';
import Container from 'src/Components/Shared/Container/Container';

function AppRouter() {
  const [{loggedIn, loading}] = useAppState(['loggedIn', 'loading']);

  useLayoutEffect(() => {
    AppStateHandler.checkLogin();
  }, []);

  if (loading) {
    return (
      <Container>
        <Center allAxis>
          <ActivityIndicator size={'large'} />
        </Center>
      </Container>
    );
  }

  return (
    <NavigationContainer>
      {loggedIn ? <AuthStackNavigator /> : <RootStackNavigator />}
    </NavigationContainer>
  );
}

export default AppRouter;
