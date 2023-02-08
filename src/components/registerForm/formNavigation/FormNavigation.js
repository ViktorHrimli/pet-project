// import { useState } from 'react';

import {
  Wrapper,
  ButtonBack,
  Submit,
  Register1,
  Register2,
  WrapperText,
  TextForm,
  LinkOnLogin,
} from './FormNavigation.styled';

export default function FormNavigation(props) {
  // const [text, setText] = useState('');
  // console.log('props', props);
  // const [showButton, setShowButton] = useState('');

  // const complete = e => {
  //   setShowButton(e.target.value);
  // };
  return (
    <Wrapper>
      <Register1>
        <Submit type="submit" name="register">
          {props.isLastStep ? 'Register' : 'Next'}
        </Submit>
      </Register1>
      <Register2>
        {props.hasPrevious && (
          <ButtonBack type="button" name="back" onClick={props.onBackClick}>
            Back
          </ButtonBack>
        )}
      </Register2>
      <WrapperText>
        <TextForm>
          Already have an account?
          <LinkOnLogin to="/login">Login</LinkOnLogin>
        </TextForm>
      </WrapperText>
    </Wrapper>
  );
}
