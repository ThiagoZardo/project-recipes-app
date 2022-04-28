import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from './redux/store';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <Provider store={ store }>
        <Router
          history={ history }
        >
          {component}
        </Router>
      </Provider>,
    ),
    history });
};

export default renderWithRouter;
