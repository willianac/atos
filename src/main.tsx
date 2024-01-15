import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import { router } from "./routes.tsx";

const theme = createTheme({
  palette: {
    primary: {
      main: '#040464',
      light: '#363683',
      dark: '#020246',
      contrastText: '#ffffff',
    },
		secondary: {
			main: '#FF6600',
			light: '#FF8433',
			dark: '#B24700',
			contrastText: '#ffffff'
		}
  },
	typography: {
    fontFamily: 'Outfit, system-ui, Helvetica',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Outfit';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
			<RouterProvider router={router}/>
		</ThemeProvider>
  </React.StrictMode>,
)
