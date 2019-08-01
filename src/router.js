import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { Route } from "react-router-dom";
import LAYOUT from './constants/layout';
import COLORS from './constants/colors';
import Dashboard from './screens/dashboard';

const THEME = {
  LAYOUT,
  COLORS,
};

class AppRouter extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={THEME}>
          <div>
            <ToastContainer />
            <div>
              <Route exact path="/" component={Dashboard} />
            </div>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default AppRouter;