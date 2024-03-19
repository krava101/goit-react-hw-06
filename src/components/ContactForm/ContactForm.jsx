import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import * as Yup from "yup";

const initialValues = {
  username: '',
  phone: ''
}

const ValidationSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('This is required'),
  phone: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('This is required')
});

function ContactForm({onAdd}) {
  const nameId = useId();
  const telId = useId();

  const handleSubmit = (values, actions) => {
    const contact = {
      id: nanoid(4),
      name: values.username,
      number: values.phone,
    }
    onAdd(contact);
		actions.resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ValidationSchema}>
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="username" id={nameId} />
        <span className={css.error}><ErrorMessage name="username" as="span" /></span>
        <label htmlFor={telId}>Number</label>
        <Field type="tel" name="phone" id={telId} />
        <span className={css.error}><ErrorMessage name="phone" as="span" /></span>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm;