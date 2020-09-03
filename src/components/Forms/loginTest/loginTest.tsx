import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// components
import FormikField from '../FormikField/FormikField';
import Button from '@material-ui/core/Button';

const Div = styled.div`
    background: #223767;
    border-radius: 10px;
    width: 500px;
    padding 50px;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: start;
	box-shadow: 0 0 30px rgba(0,0,0,0.15);

	h1 {
		color: #527cc9;
	}
`;

// Yup schema for input validation
const SigninSchema = Yup.object().shape({
	email: Yup.string().required('This field is required!').email('Must be a valid email!'),
	password: Yup.string().required('This field is required').min(8, 'Must be at least 8 character!')
});

interface FormValues {
	email: string;
	password: string;
}

const initialValues: FormValues = {
	email: '',
	password: ''
};

const LoginTest: React.FC = () => {
	// values object automatically tracks input value state
	const handleSubmit = (values: FormValues): void => {
		alert(JSON.stringify(values));
	};

	return (
		<Div>
			<h1>Sign In</h1>
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
						<Button variant="contained" disabled={!isValid || !dirty} color="primary" type="submit">
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</Div>
	);
};

export default LoginTest;
