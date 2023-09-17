import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Home } from './src/screens/Home';




export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}