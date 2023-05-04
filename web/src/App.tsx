import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<AppRoutes />
			</Router>
		</ThemeProvider>
	);
};

export default App;
