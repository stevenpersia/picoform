import { ChangeEvent, FormEvent, useState } from 'react';

const useForm = ({ initialValues }: IProps = {}) => {
  const [values, setValues] = useState(initialValues || {});

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (onSubmit: (values: ValuesT) => void) => (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    onSubmit(values);
  };

  const as = (name: string) => {
    const value = values[name];
    return { name, onChange, value };
  };

  return { as, handleSubmit, values };
};

type ValuesT = { [k: string]: any };

interface IProps {
  initialValues?: ValuesT;
}

export default useForm;
