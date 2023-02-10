import {
  Wrapper,
  ButtonBack,
  Submit,
  Register1,
  Register2,
  WrapperText,
  TextForm,
  LinkOnLogin,
} from 'components/registerForm/formNavigation/FormNavigation.styled';

export default function FormNavigation(props) {
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