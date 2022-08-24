import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  URL_API = 'http://localhost:4000/api/countries';

  newCountry: Country = {
    name: '',
    country: '',
    timezone: '',
    location: {
      latitude: 0,
      longitude: 0
    },
    population: 0
  };

  countries: Country[] = [];

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Country[]>(this.URL_API);
  }

  createCountry(country: any) {
    return this.http.post(this.URL_API, {
      name: country.name,
      country: country.country,
      timezone: country.timezone,
      location: {
        longitude: country.longitude,
        latitude: country.latitude
      },
      population: country.population
    })
  }

  updateCountry(country: any){
    return this.http.put(`${this.URL_API}/${country._id}`,{
      name: country.name,
      country: country.country,
      timezone: country.timezone,
      location: {
        longitude: country.longitude,
        latitude: country.latitude
      },
      population: country.population
    })
  }

  deleteCountry(_id: string | undefined) {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
