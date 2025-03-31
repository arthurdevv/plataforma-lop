import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 4rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 620px) {
    padding: 2rem;
  }
`;

export const Form = styled.div`
  width: 100%;
  max-width: 50rem;
  height: 40rem;
  display: flex;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const FormInputs = styled.div`
  padding: 2rem;
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(16px) saturate(180%);
  background: rgba(0, 0, 0, 0.2);
`;

export const FormInfo = styled.div`
  padding: 0.5rem 2.5rem;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(16px) saturate(180%);
  background: rgba(0, 0, 0, 0.2);
  align-items: flex-start;
  justify-content: center;

  h4 {
    font-size: 2.125rem;
    line-height: 1.235;
    font-weight: 700;
    margin-bottom: 15px;
  }

  p {
    font-size: 0.875rem;
    line-height: 2;
  }

  @media (max-width: 680px) {
    display: none;
  }
`;

export const Logo = styled.div`
  height: 5rem;
  margin-bottom: calc(2rem - 10px);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(/logo.svg);
`;

export const Register = styled.div`
  gap: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.35);
  }

  & a {
    font-size: 0.875rem;
    cursor: pointer;
    color: rgba(230, 230, 230, 1);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  min-height: 2.5rem;
  margin: 2rem 0px;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(230, 230, 230, 1);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  transition: 0.2s;
  text-decoration: none;

  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const InputsWrapper = styled.div`
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const InputsContent = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & span {
    font-size: 0.8125rem;
    color: rgba(230, 230, 230, 1);
  }
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  height: 2.5rem;
  padding: 0.75rem 1rem;
  flex: 1 1 auto;
  font-size: 0.875rem;
  display: block;
  appearance: none;
  background: transparent;
  outline: none;
  color: rgba(230, 230, 230, 1);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  transition: 0.2s;

  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

export const Error = styled.p`
  gap: 0.25rem;
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  color: rgba(209, 36, 47, 1);

  & span {
    width: 0.625rem;
    height: 0.6875rem;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(/error.svg);
  }
`;
