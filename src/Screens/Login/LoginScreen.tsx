import React from 'react';
import Container from 'src/Components/Shared/Container/Container';
import Padding from 'src/Components/Shared/Padding/Padding';
import LoginForm from './Components/LoginForm/LoginForm';

function LoginScreen() {
  return (
    <Container>
      <Padding flex={1} horizontal>
        <LoginForm />
      </Padding>
    </Container>
  );
}

export default LoginScreen;
