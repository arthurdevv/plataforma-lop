'use client';

import React, { useState } from 'react';

import { Conic } from '@/styles/global';
import {
  Wrapper,
  Form,
  FormInputs,
  FormInfo,
  Logo,
  Register,
  Button,
  InputsWrapper,
  InputsContent,
  InputsLink,
  Input,
  Error,
} from './styles';

const Login: React.FC = () => {
  const [form, setForm] = useState<User>({ name: '', email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) setError(data.error);
  };

  return (
    <>
      <Wrapper>
        <Form>
          <FormInputs>
            <Logo />
            <form onSubmit={handleSubmit}>
              <InputsWrapper>
                {error && (
                  <Error>
                    <span />
                    {error}
                  </Error>
                )}
                <InputsContent>
                  <span>Endereço de e-mail</span>
                  <Input
                    type='email'
                    name='email'
                    placeholder='Digite seu e-mail'
                    onChange={handleChange}
                    required
                  />
                </InputsContent>
                <InputsContent>
                  <InputsLink>
                    <span>Senha</span>
                    <a href='/forget'>Esqueceu a senha?</a>
                  </InputsLink>
                  <Input
                    type='password'
                    name='password'
                    placeholder='Digite sua senha'
                    onChange={handleChange}
                    required
                  />
                </InputsContent>
              </InputsWrapper>
              <Button type='submit'>Entrar</Button>
            </form>
            <Register>
              <span>Não possui uma conta?</span>
              <a href='/register'>Cadastre-se</a>
            </Register>
          </FormInputs>
          <FormInfo>
            <h4>
              Explorando <br /> a Lógica
            </h4>
            <p>
              Aprimore seu raciocínio lógico e suas habilidades de programação.
            </p>
          </FormInfo>
        </Form>
      </Wrapper>
      <Conic style={{ bottom: '2vh', left: '2vh' }} />
      <Conic style={{ top: '2vh', right: '2vh' }} />
    </>
  );
}

export default Login;
