'use client';

import { Conic } from '@/styles/global';
import {
  Wrapper,
  Form,
  FormInputs,
  FormInfo,
  Logo,
  Button,
  InputsWrapper,
  InputsContent,
  Input,
} from './styles';

export default function Forget() {
  return (
    <>
      <Wrapper>
        <Form>
          <Logo />
          <FormInfo>
            <h4>Recuperação de conta</h4>
            <p>
              Digite o e-mail da sua conta e enviaremos um link para redefinir
              sua senha.
            </p>
          </FormInfo>
          <FormInputs>
            <form >
              <InputsWrapper>
                <InputsContent>
                  <span>Endereço de e-mail</span>
                  <Input type='email' placeholder='Digite seu e-mail' required />
                </InputsContent>
              </InputsWrapper>
              <Button type='submit'>Enviar</Button>
            </form>
          </FormInputs>
        </Form>
      </Wrapper>
      <Conic style={{ top: '20vh', left: '2vh' }} />
      <Conic style={{ bottom: '20vh', right: '2vh' }} />
    </>
  );
}
