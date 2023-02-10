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
} from 'components/loginForm/LoginForm.styled';

import { LoginBtn } from 'components/loginForm/loginBtn/LoginBtn';
import Container from 'components/container/Container';

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

// export const emailRegexp =
//   /^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/;
// export const passwordRegexp = /^[A-Za-z0-9!?#$%^&_\-*]{7,32}$/;

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);

  const validationSchema = yup.object({
    email: yup.string().required('Email is required').email(),
    password: yup
      .string('any letters and symbols except spaces. min 7 characters max 32')
      .matches(/^[^ ]{7,32}$/)

      .max(32, 'Must be 15 characters or less')
      .min(7, 'Must be at least 7 characters')
      .required('This field is required'),
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
