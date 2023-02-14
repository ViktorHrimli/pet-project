import { AuthSection, Main } from 'components/loginForm/LoginForm.styled';
import { LoginForm } from 'components/loginForm/LoginForm';

const LoginPage = () => {
  return (
    <Main>
      <AuthSection>
        <LoginForm />
      </AuthSection>
    </Main>
  );
};

export default LoginPage;
