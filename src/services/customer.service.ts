import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base-api.service'
import 'rxjs/add/operator/toPromise';


@Injectable()

export class CustomerService extends BaseApiService {
    constructor(public http: HttpClient) {
        super(http);

        this.http.get(`http://localhost:3000/customers/`)
          .subscribe(response => { // cuando usas http se usa subscribe()
            console.log(response);
          });

        // ESTO NO HACE LO QUE CREES QUE HACE
        //console.log('MENSAJE', this.http.get(`http://localhost:3000/customers/`));
      }
}
