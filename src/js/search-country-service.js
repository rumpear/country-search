export class SearchCountryService {
  constructor() {
    this.searchQuery = '';
  }

  // fetchCountries() {
  //   const url = `https://restcountries.com/v3.1/name/${this.searchQuery}?fields=name,capital,population,flags,languages`;

  //   return fetch(url).then(response => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     return response.json();
  //   });
  // }

  async fetchCountries() {
    const url = `https://restcountries.com/v3.1/name/${this.searchQuery}?fields=name,capital,population,flags,languages`;

    try {
      const response = await fetch(url);
      // console.log(response.ok);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
