<h1 align="center"><img src="https://github.com/stevenpersia/picoform/blob/main/picoform.png" alt="picoform" /></h1>

## Overview

Tiny React hook for managing form state. That's it. 🤏

- **Headless form** 🤖
- **Super lightweight** ⚡
- **Easy to use** 🤘
- **Compatible with your favorite UI framework and validation package** 💜
- **TypeScript supported** 🌞

## Installation

Install package :

```sh
yarn add picoform
# or
npm install picoform
```

## How to use

### Basic usage

```jsx
import { useForm } from 'picoform';

export default function App() {
  const { as, handleSubmit, values } = useForm();

  const onSubmit = () => console.log(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...as('firstname')} />
      <input {...as('lastname')} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### With initial values

```jsx
import { useForm } from 'picoform';

const initialValues = {
  firstname: 'John',
  lastname: 'Doe',
};

export default function App() {
  const { as, handleSubmit, values } = useForm({ initialValues });

  const onSubmit = () => console.log(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...as('firstname')} />
      <input {...as('lastname')} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### With `yup` package

```jsx
import { useForm } from 'picoform';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup
    .string()
    .min(8)
    .required(),
});

export default function App() {
  const { as, handleSubmit, values } = useForm();

  const onSubmit = async () => {
    try {
      await schema.validate(values);
      console.log(values);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...as('username')} type="text" />
      <input {...as('password')} type="password" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### With `material-ui` package

```jsx
import { useForm } from 'picoform';
import TextField from '@mui/material/TextField';

export default function App() {
  const { as, handleSubmit, values } = useForm();

  const onSubmit = () => console.log(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...as('firstname')} />
      <TextField {...as('lastname')} />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```
