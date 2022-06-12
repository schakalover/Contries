import { Component } from '@angular/core';
import { Countrie } from '../repository/model';
import { CountriesService } from '../repository/services';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html'
})
export class CountriesComponent {

  page: number = 1;
  countries: Countrie[];
  name: string = "";

  loading: boolean;

  constructor(private _service: CountriesService) {
    this.countries = [];
    this.loading = false;

    this.getAllCountries()
  }

  getAllCountries() {
    this._service.getAll().subscribe(data => {
      this.countries = data as Countrie[];
    }, (error: any) => {

    });
  }

  findCountrie(event: any) {
    if (this.name.length > 3) {
      this._service.getCountrieForName(this.name).subscribe(data => {
        this.countries = data as Countrie[];
      }, (error: any) => {
          this.countries = [];
      });
    }
  }
}

