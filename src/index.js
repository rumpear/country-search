import { refs } from './js/refs';
import { renderCountries } from './js/renderCountries';
import { checkingForAnEmptyString } from './js/checkingForAnEmptyString';
import { SearchCountryService } from './js/search-country-service';

import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

refs.inputSearch.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

const searchCountryService = new SearchCountryService();

function onInput(e) {
  searchCountryService.query = e.target.value.trim();

  checkingForAnEmptyString(searchCountryService.query);

  searchCountryService
    .fetchCountries()
    .then(renderCountries)
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
