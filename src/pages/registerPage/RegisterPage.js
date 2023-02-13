import RegisterForm from 'components/registerForm/RegisterForm';

import { Section, Main } from 'pages/registerPage/RegisterPage.styled';

const RegisterPage = () => {
  return (
    <Main>
      <Section>
        <RegisterForm />
      </Section>
    </Main>
  );
};

export default RegisterPage;
