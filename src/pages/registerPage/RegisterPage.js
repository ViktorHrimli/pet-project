import RegisterForm from '../../components/registerForm/RegisterForm';

import { Section } from 'pages/registerPage/RegisterPage.styled';

const RegisterPage = () => {
  return (
    <main>
      <Section>
        <RegisterForm />
      </Section>
    </main>
  );
};

export default RegisterPage;
