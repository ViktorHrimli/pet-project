import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  validationSchema1,
  validationSchema2,
} from 'components/registerForm/validationSchema';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputField from '../registerForm/inputField/InputField';
import { nanoid } from 'nanoid';
import MultiStepForm, {
  FormStep,
} from '../registerForm/multiStepForm/MultiStepForm';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import ContainerRegister from '../registerForm/containerRegister/ContainerRegister';
import {
  PageTitle,
  EntryFieldLabel,
  LabelPass,
  LabelConfirmPass,
  ButtonIconPass,
  ButtonIconConfirmPass,
  LabelPhone,
} from './RegisterForm.styled';

const EmailInputId = nanoid();
const PasswordInputId = nanoid();
const NameInputId = nanoid();
const LocationInputId = nanoid();
const PhoneInputId = nanoid();

const initialValues = {
  email: '',
  password: '',
  confirm_password: '',
  name: '',
  location: '',
  phone: '',
};

export default function RegisterForm() {
  const [passwordType, setPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');

  const showErrorRegister = () => {
    toast.error('User with this email already exists', {
      position: 'top-right',
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }, error) => {
    const { email, password, confirm_password, name, location, phone } = values;

    if (password === confirm_password) {
      dispatch(
        register({
          email: email,
          password: password,
          name: name,
          location: location,
          phone: phone,
        })
      );
    } else if (error) {
      return;
    }
    showErrorRegister();

    resetForm();
  };

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const toggleConfirmPassword = () => {
    if (confirmPasswordType === 'password') {
      setConfirmPasswordType('text');
      return;
    }
    setConfirmPasswordType('password');
  };

  return (
    <ContainerRegister>
      <PageTitle>Registration</PageTitle>
      <MultiStepForm initialValues={initialValues} onSubmit={handleSubmit}>
        <FormStep
          stepName="Person"
          onSubmit={() => console.log('Step1')}
          validationSchema={validationSchema1}
        >
          <EntryFieldLabel htmlFor={EmailInputId}>
            <InputField
              autoComplete="off"
              type="text"
              name="email"
              placeholder="Email"
            />
          </EntryFieldLabel>
          <LabelPass htmlFor={PasswordInputId}>
            <InputField
              type={passwordType}
              name="password"
              placeholder="Password"
            />
            <ButtonIconPass type="button" onClick={togglePassword}>
              {passwordType === 'password' ? (
                <RxEyeClosed style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
              ) : (
                <RxEyeOpen style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
              )}
            </ButtonIconPass>
          </LabelPass>
          <LabelConfirmPass>
            <InputField
              type={confirmPasswordType}
              name="confirm_password"
              placeholder="Confirm Password"
            />
            <ButtonIconConfirmPass
              type="button"
              onClick={toggleConfirmPassword}
            >
              {confirmPasswordType === 'password' ? (
                <RxEyeClosed style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
              ) : (
                <RxEyeOpen style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
              )}
            </ButtonIconConfirmPass>
          </LabelConfirmPass>
        </FormStep>
        {/* step 2 */}
        <FormStep
          stepName="Address"
          onSubmit={() => console.log('Step2 - Register')}
          validationSchema={validationSchema2}
        >
          <EntryFieldLabel htmlFor={NameInputId}>
            <InputField
              type="text"
              name="name"
              placeholder="Name"
              title="Name may contain any letters. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </EntryFieldLabel>
          <EntryFieldLabel htmlFor={LocationInputId}>
            <InputField
              type="text"
              name="location"
              placeholder="City, region"
              title="The location must consist of two words separated by a comma, for example: Kyiv, Kyiv"
            />
          </EntryFieldLabel>
          <LabelPhone htmlFor={PhoneInputId}>
            <InputField
              type="text"
              name="phone"
              placeholder="Mobile phone"
              title="The phone number must be in the format +380123456789"
            />
          </LabelPhone>
        </FormStep>
      </MultiStepForm>
      <ToastContainer />
    </ContainerRegister>
  );
}
