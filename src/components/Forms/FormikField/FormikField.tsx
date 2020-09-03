import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import TextField from '@material-ui/core/TextField';

const Div = styled.div`
	margin: 10px 0;
	input {
		color: white;
	}
	label {
		color: #527cc9;
	}
	.MuiFormHelperText-root {
		color: #f56200;
	}
	.MuiInput-input {
		border-bottom: 2px solid #527cc9;
	}
`;

interface FormikFieldProps {
	name: string;
	label: string;
	type?: string;
}

const FormikField: React.FC<FormikFieldProps> = ({ label, name, type = 'text' }) => {
	return (
		<Div>
			<Field
				as={TextField}
				label={label}
				name={name}
				required
				fullWidth
				type={type}
				color="primary"
				helperText={<ErrorMessage name={name} />}
			/>
		</Div>
	);
};

export default FormikField;
