'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
  Input,
  Error,
} from './styles';

const _Register: React.FC = () => {
  const [form, setForm] = useState<User>({ name: '', email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <Wrapper>
        <Form>
          <FormInfo>
            <h4>
              Crie <br /> sua conta
            </h4>
            <p>Faça parte da maior plataforma universitária de programação.</p>
          </FormInfo>
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
                  <span>Nome</span>
                  <Input
                    type='text'
                    name='name'
                    placeholder='Digite seu nome'
                    onChange={handleChange}
                    required
                  />
                </InputsContent>
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
                  <span>Senha</span>
                  <Input
                    type='password'
                    name='password'
                    placeholder='Digite sua senha'
                    onChange={handleChange}
                    required
                  />
                </InputsContent>
                <InputsContent>
                  <span>Confirme sua senha</span>
                  <Input
                    type='password'
                    placeholder='Digite sua senha'
                    required
                  />
                </InputsContent>
              </InputsWrapper>
              <Button type='submit'>Criar conta</Button>
            </form>
            <Register>
              <span>Já possui uma conta?</span>
              <a href='/'>Entrar</a>
            </Register>
          </FormInputs>
        </Form>
      </Wrapper>
      <Conic style={{ top: '2vh', left: '2vh' }} />
      <Conic style={{ bottom: '2vh', right: '2vh' }} />
    </>
  );
}

export default _Register;
