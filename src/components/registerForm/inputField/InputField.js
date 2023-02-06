import { useField } from "formik";
import { InputArea } from "./InputField.styled";

export default function InputField(props) {
  const [field, meta] = useField(props);
  return (
    <>
      <InputArea {...field} {...props} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
}
