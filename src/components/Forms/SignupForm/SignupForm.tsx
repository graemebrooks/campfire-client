import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// components
import FormikField from '../FormikField/FormikField';
import Button from '@material-ui/core/Button';

const Div = styled.div`
    background: #223767;
    border-radius: 10px;
	width: 500px;
	margin: 3rem;
    padding 50px;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	box-shadow: 0 0 30px rgba(0,0,0,0.15);

	h1 {
		color: #527cc9;
		margin-right: auto;
	}
	
	button {
		margin: 0.5rem;
	}
`;

// Yup schema for input validation
const SigninSchema = Yup.object().shape({
	email: Yup.string().required('This field is required!').email('Must be a valid email!'),
	password: Yup.string().required('This field is required').min(8, 'Must be at least 8 character!'),
	confirmPassword: Yup.string()
		.required('This field is required')
		.test('passwords-match', 'Passwords must match', function(value) {
			return this.parent.password === value;
		}),
	firstName: Yup.string().required('This field is required!'),
	lastName: Yup.string().required('This field is required!')
});

interface FormValues {
	email: string;
	password: string;
	confirmPassword: string;
	firstName: string;
	lastName: string;
}

const initialValues: FormValues = {
	email: '',
	password: '',
	confirmPassword: '',
	firstName: '',
	lastName: ''
};

const SignupForm: React.FC = () => {
	// values object automatically tracks input value state
	const handleSubmit = (values: FormValues): void => {
		axios
			.post('http://localhost:8080/api/user/registration', values)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Div>
			<h1>Sign Up</h1>
			<Formik
				// Formik element is just a wrapper that give props to our actual inner form
				// initializes tracking of input value state
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={SigninSchema}
			>
				{({ isValid, dirty }) => (
					<Form>
						<FormikField label="Email" name="email" />
						<FormikField label="Password" name="password" type="password" />
						<FormikField label="Confirm Password" name="confirmPassword" type="password" />
						<FormikField label="First Name" name="firstName" />
						<FormikField label="Last Name" name="lastName" />
						<Button variant="contained" disabled={!isValid || !dirty} color="primary" type="submit">
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</Div>
	);
};

export default SignupForm;
