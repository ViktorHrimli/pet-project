import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
// import { HiEye, HiEyeSlash } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/operations';
import {
  Input,
  TitleAuth,
  Wrapper,
  Paragraph,
  FormLink,
  FormCustom,
  ErrorText,
  Label,
  Icon,
} from './LoginForm.styled';

import { LoginBtn } from './loginBtn/LoginBtn';
import Container from '../container/Container';

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const emailRegexp =
  /^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/;
export const passwordRegexp = /^[A-Za-z0-9!?#$%^&_\-*]{7,32}$/;

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);

  const validationSchema = yup.object({
    email: yup
      .string()
      .min(10, 'Email must consist of at least 10 symbols')
      .max(63, 'Email must contain no more than 63 symbols')
      .matches(emailRegexp, 'Please, enter a valid e-mail')
      .required('E-mail is required'),
    password: yup
      .string()
      .min(7, 'Password must consist of at least 7 symbols')
      .max(32, 'Password must contain no more than 32 symbols')
      .matches(passwordRegexp, 'Please, enter a valid password')
      .required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    dispatch(login(values)).then(res => {
      if (res.meta.requestStatus === 'fulfilled') {
        navigate('/user', { replace: true });
      }
      return;
    });
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <Container>
      <Wrapper>
        <TitleAuth>Login</TitleAuth>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <FormCustom>
              <Label>
                <Input name="email" type="text" placeholder="Email" />
                <FormError name="email" />
              </Label>

              <Label>
                <Input
                  name="password"
                  type={passwordShown ? 'text' : 'password'}
                  placeholder="Password"
                />
                <Icon onClick={togglePassword}>
                  {passwordShown ? <RxEyeOpen /> : <RxEyeClosed />}
                </Icon>
                <FormError name="password" />
              </Label>
              <LoginBtn text={'Login'} />
            </FormCustom>
          )}
        </Formik>

        <Paragraph>
          <span>Don't have an account? </span>
          <FormLink to="/register">Register</FormLink>
        </Paragraph>
      </Wrapper>
    </Container>
  );
};
