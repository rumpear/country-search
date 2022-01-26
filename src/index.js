import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { refs } from './js/refs';
import { renderCountries } from './js/renderCountries';
import { checkingForAnEmptyString } from './js/checkingForAnEmptyString';
import { SearchCountryService } from './js/search-country-service';

import { cleanupRender } from './js/cleanupRender';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

refs.inputSearch.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

const searchCountryService = new SearchCountryService();

async function onInput(e) {
  searchCountryService.query = e.target.value.trim();

  if (!searchCountryService.query) {
    cleanupRender();
    return;
  }

  // checkingForAnEmptyString(searchCountryService.query);

  // searchCountryService
  //   .fetchCountries()
  //   .then(renderCountries)
  //   .catch(error => {
  //     console.log(error);
  //     Notiflix.Notify.failure('Oops, there is no country with that name');
  //   });

  try {
    const country = await searchCountryService.fetchCountries();
    renderCountries(country);
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Oops, there is no country with that name');
  }
}
