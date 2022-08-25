import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { NgForm } from '@angular/forms';
import { Country } from 'src/app/models/country';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {

  constructor(
    public countryService: CountriesService,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countryService.getCountries().subscribe(
      res => { this.countryService.countries = res },
      err => console.log(err)
    )
  }

  addCountry(form: NgForm) {
    if(form.value._id){
      this.countryService.updateCountry(form.value).subscribe(
        res =>{
          this.getCountries()
        },
        err => console.log(err)
      )
    }else{
      this.countryService.createCountry(form.value).subscribe(
        res => {
          this.getCountries();
          form.reset();
        },
        err => console.log(err)
      )
    }
  }

  deleteCountry(id: string | undefined) {
    this.countryService.deleteCountry(id?.toString()).subscribe(
      res=> {
        this.getCountries()
      },
      err => console.log(err)
    )
  }

  editCountry(country: Country){
    this.countryService.newCountry = country
  }

  resetForm(form: NgForm){
    form.reset()
  }

  logout(){
    this.authService.logout()
  }
}
