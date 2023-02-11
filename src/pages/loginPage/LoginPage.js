import { AuthSection } from 'components/loginForm/LoginForm.styled';
import { LoginForm } from 'components/loginForm/LoginForm';

const LoginPage = () => {
  return (
    <main>
      <AuthSection>
        <LoginForm />
      </AuthSection>
    </main>
  );
};

export default LoginPage;
