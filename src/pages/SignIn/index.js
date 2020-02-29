import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import {
  Container,
  Form,
  FormInput,
  SignLink,
  SignLinkText,
  SubmitButton,
} from './styles';
import logo from '../../../assets/firefighter_logo.png';

export default function SignIn({ navigation }) {
  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');

  return (
    <LinearGradient
      colors={['#7159c1', '#ab59c1']}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 600,
      }}
    >
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />
          <SubmitButton onPress={() => navigation.navigate('Home')}>
            Entrar
          </SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Crie sua conta grátis</SignLinkText>
        </SignLink>
      </Container>
    </LinearGradient>
  );
}
