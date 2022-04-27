import drink from './mocks/drinks';
import meal from './mocks/meals';
import { fetchDrinks, fetchMeals } from '../helpers';

// Adaptação de: https://jaketrent.com/post/mock-fetch-jest-test

function mockFetch(data) {
  return function fetch() {
    return new Promise((resolve) => {
      resolve({
        json: () => Promise.resolve(data),
      });
    });
  };
}

describe('Verifica o retorno das requests', () => {
  it('Verifica o retorno da função fetchDrinks', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch(drink));
    const response = await fetchDrinks();
    expect(response).toEqual(drink);
    expect(fetch).toHaveBeenCalledTimes(1);
    global.fetch.mockClear();
  });
  it('Verifica o retorno da função fetchMeals', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch(meal));
    const response = await fetchMeals();
    expect(response).toEqual(meal);
    expect(fetch).toHaveBeenCalledTimes(1);
    global.fetch.mockClear();
  });
});
