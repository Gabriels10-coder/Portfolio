import React from 'react';
import Routes from './components/routes/route';

import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider
} from '@material-ui/core';
import { AnimateSharedLayout } from 'framer-motion';


const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto, Sans Serif',
  },
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#1976d2'
    }
  },

})
const App = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <AnimateSharedLayout type='crossfade'>
          <CssBaseline />
          <Routes />
        </AnimateSharedLayout>
      </ThemeProvider>

    </div>
  );
}

export default App;
