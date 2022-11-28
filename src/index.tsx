import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { alpha } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { persistor, store } from './store';
import App from './App';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#ffffff',
      secondary: alpha('#fff', 0.7),
    },
    primary: {
      main: '#ffb43a',
    },
  },
  typography: {
    fontFamily: `"Source Sans Pro"`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
