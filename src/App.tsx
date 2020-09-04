import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// components
import Navbar from './components/navbar/navbar';
import LoginTest from './components/Forms/loginTest/loginTest';
import SignupForm from './components/Forms/SignupForm/SignupForm';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#eacf00',
			dark: '#ea7900',
			contrastText: '#FFF',
			main: '#ea8f00'
		},
		secondary: {
			main: '#FFFFFF',
			light: '#FFFFFF',
			dark: '#FFFFFF',
			contrastText: '#fff'
		}
	}
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Navbar cool={10} />
				<div className="content">
					<SignupForm />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
