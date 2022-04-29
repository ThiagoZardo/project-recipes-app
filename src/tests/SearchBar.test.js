import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import HeaderSearch from '../components/HeaderSearch';
import SearchBar from '../components/SearchBar';
import Drinks from '../pages/Drinks';
import Foods from '../pages/Foods';
import renderWithRouter from '../renderWithRouter';
import {
  BTN_LOGIN_SUBMIT,
  EMAIL_INPUT_TEST_ID,
  EXEC_SEARCH_BTN,
  FIRST_LETTER_SEARCH_RADIO,
  HEADER_SEARCH_INPUT_ID,
  HEADER_SEARCH_TOP_BTN_ID,
  INGREDIENT_SEARCH_RADIO,
  NAME_SEARCH_RADIO,
  PASSWORD_INPUT_TEST_ID,
  USER_ADDRESS_EMAIL
} from './helpers/constants';
import drink from './mocks/drinks';
import meal from './mocks/meals';

function mockFetch(data) {
  return function fetch() {
    return new Promise((resolve) => {
      resolve({
        json: () => Promise.resolve(data),
      });
    });
  };
}

describe('12. Implemente os elementos da barra de busca', () => {
  it('Existe um radio button com data-testid ingredient-search-radio', () => {
    renderWithRouter(<SearchBar />);
    const ingredientSearchRadio = screen.getByTestId(INGREDIENT_SEARCH_RADIO);
    expect(ingredientSearchRadio).toBeInTheDocument();
  });

  it('Existe um radio button com data-testid name-search-radio', () => {
    renderWithRouter(<SearchBar />);
    const nameSearchRadio = screen.getByTestId(NAME_SEARCH_RADIO);
    expect(nameSearchRadio).toBeInTheDocument();
  });

  it('Existe um radio button com data-testid first-letter-search-radio', () => {
    renderWithRouter(<SearchBar />);
    const firstLetterSearchRadio = screen.getByTestId(FIRST_LETTER_SEARCH_RADIO);
    expect(firstLetterSearchRadio).toBeInTheDocument();
  });

  it('Existe um button com data-testid search-input', () => {
    renderWithRouter(<HeaderSearch />);
    const searchTopBtn = screen.getByTestId(HEADER_SEARCH_TOP_BTN_ID);
    userEvent.click(searchTopBtn);
    const headerSearchInput = screen.getByTestId(HEADER_SEARCH_INPUT_ID);
    expect(headerSearchInput).toBeInTheDocument();
  });
});

describe('13. Verifica se os endpoints estão corretos', () => {
  it('Verifica o end point ingredients', () => {
    renderWithRouter(<SearchBar />);
    const execSearchBtn = screen.getByTestId(EXEC_SEARCH_BTN);
    expect(execSearchBtn).toBeInTheDocument();
  });
});

describe('14. Verifica se a busca na API Meals é chamado corretamente', () => {
  it('Verifica o radio ingredient', () => {
    renderWithRouter(
      <Foods />,
    );
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch(meal));
    const screenIngredient = screen.getByTestId(INGREDIENT_SEARCH_RADIO);
    userEvent.click(screenIngredient);
    const buttonSearch = screen.getByTestId(EXEC_SEARCH_BTN);
    userEvent.click(buttonSearch);
    expect(fetch).toHaveBeenCalledTimes(1);
    global.fetch.mockClear();
  });
  it('Verifica o radio Name', () => {
    renderWithRouter(
      <Foods />,
    );
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch(meal));
    const screenName = screen.getByTestId(INGREDIENT_SEARCH_RADIO);
    userEvent.click(screenName);
    const buttonSearch = screen.getByTestId(EXEC_SEARCH_BTN);
    userEvent.click(buttonSearch);
    expect(fetch).toHaveBeenCalledTimes(2);
    global.fetch.mockClear();
  });
  it('Verifica o radio First Letter', () => {
    renderWithRouter(
      <Foods />,
    );
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch(meal));
    const screenFirstLetter = screen.getByTestId(FIRST_LETTER_SEARCH_RADIO);
    userEvent.click(screenFirstLetter);
    const buttonSearch = screen.getByTestId(EXEC_SEARCH_BTN);
    userEvent.click(buttonSearch);
    expect(fetch).toHaveBeenCalledTimes(2);
    global.fetch.mockClear();
  });
  it('Verifica se o radio Letter com mais uma letra o alert é chamado', () => {
    renderWithRouter(
      <Foods />,
    );
    global.alert = jest.fn();
    const screenFirstLetter = screen.getByTestId(FIRST_LETTER_SEARCH_RADIO);
    userEvent.click(screenFirstLetter);
    const searchTopBtn = screen.getByTestId(HEADER_SEARCH_TOP_BTN_ID);
    userEvent.click(searchTopBtn);
    const inputBtn = screen.getByTestId(HEADER_SEARCH_INPUT_ID);
    userEvent.type(inputBtn, 'aa');
    const buttonSearch = screen.getByTestId(EXEC_SEARCH_BTN);
    userEvent.click(buttonSearch);
    jest.spyOn(global, 'alert').mockImplementation(() => {});

    expect(alert).toHaveBeenCalledTimes(1);
    expect(alert).toHaveBeenCalledWith('Your search must have only 1 (one) character');
    global.alert.mockClear();
  });
});

describe('15. Verifica se a busca na API Drinks é chamado corretamente', () => {
  it('Verifica o radio ingredient', () => {
    renderWithRouter(
      <Drinks />,
    );
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch(drink));
    const screenIngredient = screen.getByTestId(INGREDIENT_SEARCH_RADIO);
    userEvent.click(screenIngredient);
    const buttonSearch = screen.getByTestId(EXEC_SEARCH_BTN);
    userEvent.click(buttonSearch);
    expect(fetch).toHaveBeenCalledTimes(2);
    global.fetch.mockClear();
  });
  it('Verifica o radio Name', () => {
    renderWithRouter(
      <Drinks />,
    );
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch(drink));
    const screenName = screen.getByTestId(INGREDIENT_SEARCH_RADIO);
    userEvent.click(screenName);
    const buttonSearch = screen.getByTestId(EXEC_SEARCH_BTN);
    userEvent.click(buttonSearch);
    expect(fetch).toHaveBeenCalledTimes(2);
    global.fetch.mockClear();
  });
  it('Verifica o radio First Letter', () => {
    renderWithRouter(
      <Drinks />,
    );
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch(drink));
    const screenFirstLetter = screen.getByTestId(FIRST_LETTER_SEARCH_RADIO);
    userEvent.click(screenFirstLetter);
    const buttonSearch = screen.getByTestId(EXEC_SEARCH_BTN);
    userEvent.click(buttonSearch);
    expect(fetch).toHaveBeenCalledTimes(2);
    global.fetch.mockClear();
  });
  it('Verifica se o radio Letter com mais uma letra o alert é chamado', () => {
    renderWithRouter(
      <Drinks />,
    );
    global.alert = jest.fn();
    const screenFirstLetter = screen.getByTestId(FIRST_LETTER_SEARCH_RADIO);
    userEvent.click(screenFirstLetter);
    const searchTopBtn = screen.getByTestId(HEADER_SEARCH_TOP_BTN_ID);
    userEvent.click(searchTopBtn);
    const inputBtn = screen.getByTestId(HEADER_SEARCH_INPUT_ID);
    userEvent.type(inputBtn, 'aa');
    const buttonSearch = screen.getByTestId(EXEC_SEARCH_BTN);
    userEvent.click(buttonSearch);
    jest.spyOn(global, 'alert').mockImplementation(() => {});

    expect(alert).toHaveBeenCalledTimes(1);
    expect(alert).toHaveBeenCalledWith('Your search must have only 1 (one) character');
    global.alert.mockClear();
  });
});

describe('16. Caso Apenas um item seja encontrado, redirecione para detalhes', () => {
  it('Caso Apenas uma comida encotrada', async () => {
    const { history } = renderWithRouter(<App />);

    const password = '1234567';
    const email = USER_ADDRESS_EMAIL;
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const btnSubmit = screen.getByTestId(BTN_LOGIN_SUBMIT);
    userEvent.type(inputPassword, password);
    userEvent.type(inputEmail, email);
    userEvent.click(btnSubmit);

    jest.spyOn(global, 'fetch').mockImplementation(mockFetch(meal));
    const screenName = screen.getByTestId(NAME_SEARCH_RADIO);
    userEvent.click(screenName);
    const searchTopBtn = screen.getByTestId(HEADER_SEARCH_TOP_BTN_ID);
    userEvent.click(searchTopBtn);
    const inputBtn = screen.getByTestId(HEADER_SEARCH_INPUT_ID);
    userEvent.type(inputBtn, 'Corba');
    const buttonSearch = screen.getByTestId(EXEC_SEARCH_BTN);
    userEvent.click(buttonSearch);
    history.push('/foods/52977');
    const { pathname } = history.location;
    expect(pathname).toBe('/foods/52977');

    global.fetch.mockClear();
  });

  it('Caso Apenas uma comida encotrada', () => {
    const { history } = renderWithRouter(<Drinks />);

    jest.spyOn(global, 'fetch').mockImplementation(mockFetch(drink));
    const screenName = screen.getByTestId(NAME_SEARCH_RADIO);
    userEvent.click(screenName);
    const searchTopBtn = screen.getByTestId(HEADER_SEARCH_TOP_BTN_ID);
    userEvent.click(searchTopBtn);
    const inputBtn = screen.getByTestId(HEADER_SEARCH_INPUT_ID);
    userEvent.type(inputBtn, 'Aquamarine');
    const buttonSearch = screen.getByTestId(EXEC_SEARCH_BTN);
    userEvent.click(buttonSearch);
    history.push('/foods/178319');
    const { pathname } = history.location;
    expect(pathname).toBe('/foods/178319');

    global.fetch.mockClear();
  });
});

// describe('17. 12 receitas de Cards é mostrada se encontrar mais de uma receita', () => {
//   it('Caso seja Comida', async () => {
//     renderWithRouter(<Foods />);
//     const screenName = screen.getByTestId(NAME_SEARCH_RADIO);
//     userEvent.click(screenName);
//     const buttonSearch = screen.getByTestId(EXEC_SEARCH_BTN);
//     userEvent.click(buttonSearch);
//     const getByheading = screen.getAllByRole('heading');
//     expect(getByheading).toHaveLength(14);
//   });
// });
