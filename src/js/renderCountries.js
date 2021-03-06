import Notiflix from 'notiflix';

import { cleanupRender } from './cleanupRender';
import { refs } from './refs';
import countriesListTpl from '../templates/countries-list.hbs';
import countryCardTpl from '../templates/country-card.hbs';

export function renderCountries(countries) {
  if (countries.length > 10) {
    Notiflix.Notify.warning('Too many matches found. Please enter a more specific name');
  }

  if (countries.length >= 2 && countries.length <= 10) {
    cleanupRender();

    // const markupList = countries
    //   .map(
    //     ({ flags, name }) => `
    //         <li class='country-list__item'>
    //             <img class='country-list__flag' src="${flags.svg}" alt="${name.official}">
    //             <h1 class='country-list__head'>${name.official}</h1>
    //         </li>
    //     `,
    //   )
    //   .join('');

    const markupList = countries.map(countriesListTpl).join('');
    console.log(markupList);

    refs.listCountry.insertAdjacentHTML('afterbegin', markupList);
  }

  if (countries.length === 1) {
    cleanupRender();

    // const markupDiv = countries
    //   .map(
    //     ({ name, capital, population, flags, languages }) => `
    //         <div class='country-card__wrapper'>
    //             <img class='country-card__flag' src="${flags.svg}" alt="${name.official}">
    //             <h1>${name.official}</h1>
    //         </div>
    //         <h2> Capital: ${capital}</h2>
    //         <p> Population: ${population}</p>
    //         <p>Official languages: ${Object.values(languages)}</p>
    //     `,
    //   )
    //   .join('');

    const markupDiv = countries.map(countryCardTpl).join('');

    refs.infoCountry.insertAdjacentHTML('afterbegin', markupDiv);
  }
}
