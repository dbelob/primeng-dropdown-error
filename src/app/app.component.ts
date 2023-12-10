import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectButtonOptionClickEvent } from "primeng/selectbutton";

interface City {
  name: string;
  code: string;
}

interface Country {
  name: string;
  code: string;
}

interface Language {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cities: City[] | undefined;
  selectedCity: City | undefined;

  countries: Country[] | undefined;
  selectedCountry: Country | undefined;

  languages: Language[] = [{name: 'English', code: 'en'}, {name: 'German', code: 'de'}];
  selectedLanguage = 'en';

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.use('en');

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

    this.countries = [
      {name: 'Australia', code: 'AU'},
      {name: 'Brazil', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'},
      {name: 'France', code: 'FR'},
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'}
    ];
  }

  changeLanguage(event: SelectButtonOptionClickEvent) {
    this.translateService.use(event.option.code);
  }
}
