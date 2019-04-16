import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class CustomerService  {
    

    constructor(public http: HttpClient) {
      
        this.http.get(`http://localhost:3000/customers`);    
        this.http.get(`http://localhost:5000/customers/`);
        this.http.get(`http://localhost:5000/customers`);
        this.http.get(`http://localhost:3000/customers/`);
         console.log('MENSAJE', this.http.get(`http://localhost:5000/customers/`));
    }

   
}

