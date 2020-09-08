import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// components
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage/HomePage';
import MoviesPage from './components/Pages/MoviesPage/MoviesPage';
import LoginPage from './components/Pages/LoginPage/LoginPage';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#eacf00',
			dark: '#ea7900',
			contrastText: '#FFF',
			main: '#ea8f00'
		},
		secondary: {
			main: '#223767',
			light: '#FFFFFF',
			dark: '#FFFFFF',
			contrastText: '#fff'
		}
	}
});

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Router>
					<Navbar cool={10} />
					<Switch>
						<Route path="/movies">
							<MoviesPage />
						</Route>
						<Route path="/login">
							<LoginPage />
						</Route>
						<Route path="/">
							<HomePage />
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>
		</div>
	);
}

export default App;
