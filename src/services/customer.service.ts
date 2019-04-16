import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
<<<<<<< HEAD
export class CustomerService extends BaseApiService {


    constructor(public http: HttpClient) {
        super(http);

        this.http.get(`http://localhost:3000/customers/`)
          .subscribe(response => { // cuando usas http se usa subscribe()
            console.log(response);
          });

        // ESTO NO HACE LO QUE CREES QUE HACE
        //console.log('MENSAJE', this.http.get(`http://localhost:3000/customers/`));
=======
export class CustomerService  {
    

    constructor(public http: HttpClient) {
      
        this.http.get(`http://localhost:3000/customers`);    
        this.http.get(`http://localhost:5000/customers/`);
        this.http.get(`http://localhost:5000/customers`);
        this.http.get(`http://localhost:3000/customers/`);
         console.log('MENSAJE', this.http.get(`http://localhost:5000/customers/`));
>>>>>>> 7fb43040427039997ecd193ecccb364fafcc8009
    }


}
