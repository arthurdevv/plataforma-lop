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
  max-width: 38rem;
  height: 40rem;
  gap: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
`;

export const FormInputs = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(16px) saturate(180%);
`;

export const FormInfo = styled.div`
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(16px) saturate(180%);

  h4 {
    font-size: 2.125rem;
    line-height: 1.235;
    font-weight: 700;
    margin-bottom: 0.9375rem;

    @media (max-width: 620px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 0.875rem;
    line-height: 2;
  }

  @media (max-width: 539px) {
    align-items: flex-start;
  }
`;

export const Logo = styled.div`
  height: 5rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(/logo.svg);
`;

export const Button = styled.button`
  width: 100%;
  min-height: 2.5rem;
  margin-top: 2rem;
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
