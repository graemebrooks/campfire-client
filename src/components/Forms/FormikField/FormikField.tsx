import React from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

import TextField from '@material-ui/core/TextField';

const Div = styled.div`
	margin: 10px 0;
	input {
		color: white;
	}
	label {
		color: #565959;
	}
	.MuiFormHelperText-root {
		color: #f56200;
	}
	.MuiInput-input {
		border-bottom: 2px solid #565959;
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
