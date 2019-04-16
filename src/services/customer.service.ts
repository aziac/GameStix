import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { CustomerRecord } from '../records/customer';
import { BaseApiService } from './base-api.service';


@Injectable()
export class CustomerService extends BaseApiService {
    

    constructor(public http: HttpClient) {
        super(http);
        this.http.get(`http://localhost:5000/customers/`);    
         console.log('MENSAJE', this.http.get(`http://localhost:5000/customers/`));
    }

   
}

