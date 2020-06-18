import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    name: Yup
    .string()
    .required("Name is required"),

    email: Yup
    .string()
    .email("Must include a valid email address")
    .required("Must include an email address"),

    password: Yup
    .string()
    .required("Must include a password under 12 characters long"),

    terms: Yup
    .boolean()
    .oneOf([true], "Please agree to the terms of use")
})

export default formSchema;