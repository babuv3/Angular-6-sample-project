import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PROP_METADATA } from '@angular/core/src/util/decorators';

@Injectable()
export class ConfigService {

   

  constructor(private http: HttpClient) {

    console.log("Hello service constructor");
     this.http.get('../../assets/json/data.json').subscribe((data) => {

       console.log("Print response data::::", data);
     });
   }

   getData() {

    let options: any = {};
    options.observe = 'response';
    options.responseType = 'json';

    this.http.get('../../assets/json/data.json', options).subscribe((data: any) => {

        console.log("Print response jjjj data::::", data);
    
      });
   }

   getUserData() {

    let options: any = {};
    options.observe = 'response';
    options.responseType = 'json';

    this.http.get('https://localhost:8443/user/fetch', options).subscribe((data: any) => {

        console.log("rest data::::", data);
    
      });

   }


}