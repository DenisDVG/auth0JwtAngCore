import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(
    public http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    // public authHttp: AuthHttp,
    public auth: AuthService) {
      debugger;
      auth.idTokenClaims$.subscribe(result => {
        console.log('token', result.__raw);
        debugger;
        const reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJ5OE9FOUZHdmhCU1hnOUlVUnVYcCJ9.eyJpc3MiOiJodHRwczovL2Rldi1haWhpdS11MS5ldS5hdXRoMC5jb20vIiwic3ViIjoiZ1oyRkxrdVpxajYzOFEyQkszS1hlc0IyWW1RSEVHZEtAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vdGVzdGFwaWQuY29tIiwiaWF0IjoxNjEwMDE5MDExLCJleHAiOjE2MTAxMDU0MTEsImF6cCI6ImdaMkZMa3VacWo2MzhRMkJLM0tYZXNCMlltUUhFR2RLIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.YtSAnGhoywsfFKVCo-87g9eXmUcz2W6cw9_fwBZDp3nsg2OS6ZcUd7GjQPM74HmKjbTSEhGtlBwPKvhcE_pv34_WrOUBsE1z9TpPomHuEVUtWk9ixYzftFSHyWh21KewrOJLU4bGPNMb6l3AvSw5IwlWTYI2Raq_QfKPRI9ue0NaNQNCmTkdeFypypnEPy0vVbbikxG4gf0lQXquMYjar2h_7lMIfRzkaMLROWcPhpPI9cAkgjOBzA6qNHqPJibES-VRk74Vo5SAhYyWsYfwvKDgnDApUErewBog-9-g3Y59fj5QzPIlDkZTSn-P5THQlvU6waFdpTQr4d1fvbIAhg'
       });
        http.get<WeatherForecast[]>(baseUrl + 'weatherforecast', { headers: reqHeader }).subscribe(res => {
          this.forecasts = res;
        }, error => console.error(error));

      }, error => console.error(error));

  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
