import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// components
import FormikField from '../FormikField/FormikField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles, Theme } from '@material-ui/core/styles';

// services
import userService from '../../../services/security/userService';

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

	.feedback {
		display: block; 
	}
`;

// Yup schema for input validation
const SigninSchema = Yup.object().shape({
	email: Yup.string().required('This field is required!').email('Must be a valid email!'),
	password: Yup.string().required('This field is required').min(8, 'Must be at least 8 characters!'),
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
	const [ signupSuccess, setSignupSuccess ] = useState<Boolean | null>(null);

	// values object automatically tracks input value state
	const handleSubmit = async (values: FormValues): Promise<void> => {
		let signupResult = await userService.signup(values);
		setSignupSuccess(signupResult);
		console.log(signupResult);
	};

	if (signupSuccess == null) {
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
	} else if (signupSuccess) {
		return (
			<Div>
				<h1>Sign Up</h1>
				<Snackbar message="I love snacks" />
				<div className="feedback">Feedback: {String(signupSuccess)}</div>
			</Div>
		);
	} else {
		return (
			<Div>
				<h1>Sign Up</h1>
				<div className="feedback">Feedback: {String(signupSuccess)}</div>
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
	}
};

export default SignupForm;
