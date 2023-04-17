import { useField } from "formik";

interface Props {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
}

const MyTextField = (props: Props) => {
  const [field, meta] = useField(props.name);
  return (
    <>
      <label>{props.label}</label>
      <input {...field} {...props} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                leading-tight focus:outline-none focus:shadow-outline" />
      {meta.touched && meta.error ? <label className="text-sm text-red-500">{meta.error}</label> : null}
    </>
  );
};

export default MyTextField;
