// import Container from 'components/container/Container';
// import { css } from '@emotion/react';
import RegisterForm from '../../components/registerForm/RegisterForm';
// import wave from '../../images/registration/wave.png';
import { Section } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <Section
    // css={css`
    //   @media (min-width: 320px) {
    //     background-image: url('../../images/registration/wave.png');
    //   }
    // `}
    >
      <RegisterForm />
    </Section>
  );
};

export default RegisterPage;
