import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validation = Yup.object().shape({
  name: Yup.string().required("Це поле є обов'язковим"),
  email: Yup.string().email('Введіть коректну електронну пошту').required("Це поле є обов'язковим"),
  phone: Yup.string().matches(/^\d{12}$/, 'Телефон повинен містити лише 12 цифр').required("Це поле є обов'язковим"),
});

const App = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Форма</h1>
      <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        validation={validation}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Ім'я</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">Електронна пошта</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="phone">Телефон</label>
            <Field type="text" id="phone" name="phone" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>

          <button type="submit">Відправити</button>
        </Form>
      </Formik>
    </div>
  );
};

export default App;


