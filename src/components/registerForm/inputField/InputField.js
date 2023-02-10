import { useField } from 'formik';
import { InputArea, Message } from 'components/registerForm/inputField/InputField.styled';

export default function InputField(props) {
  const [field, meta] = useField(props);

  return (
    <>
      <InputArea {...field} {...props} />
      {meta.error && meta.touched && <Message>{meta.error}</Message>}
    </>
  );
}