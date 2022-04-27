import React from 'react';

const SearchBar = () => (
  <section>
    <form>
      <label
        htmlFor="ingredient-search"
      >
        Busca Ingredientes:
        <input
          type="radio"
          id="ingredient-search"
          data-testid="ingredient-search-radio"
        />
      </label>

      <label
        htmlFor="name-search"
      >
        Busca por Nome:
        <input
          type="radio"
          id="name-search"
          data-testid="name-search-radio"
        />
      </label>

      <label
        htmlFor="letter-search"
      >
        Busca por Letra:
        <input
          type="radio"
          id="letter-search"
          data-testid="first-letter-search-radio"
        />
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </form>
  </section>
);

export default SearchBar;
