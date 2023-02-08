import { useField } from 'formik';
import { InputArea, Message } from './InputField.styled';

export default function InputField(props) {
  const [field, meta] = useField(props);

  console.log('props', props);
  console.log('meta', meta);
  return (
    <>
      <InputArea {...field} {...props} />
      {/* {meta.error && meta.touched && <Message>{meta.error}</Message>} */}
    </>
  );
}
