import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { CustomerRecord } from '../records/customer';
import { BaseApiService } from './base-api.service';


@Injectable()
export class CustomerService extends BaseApiService {
    private customerURL: string = 'localhost:5000/customers';

    constructor(public http: HttpClient) {
        super(http);
        this.http.get(`http://localhost:5000/customers/`);    
         console.log('MENSAJE', this.http.get(`http://localhost:5000/customers/`));
    }

    saveCustomer(customer: CustomerRecord): Promise<CustomerRecord>{
        if (customer.id){
            return this.updateCustomer(customer);
        }else{
            return this.createCustomer(customer);
        }
    }

    getCustomers(): Promise<CustomerRecord[]> {
        return this._get(this.customerURL)
    }

    createCustomer(customer: CustomerRecord): Promise<CustomerRecord> {
        const body = this._toHttpParams(customer);

        return this._post(this.customerURL, body)
    }

    updateCustomer(customer: CustomerRecord): Promise<CustomerRecord> {
        const body = this._toHttpParams(customer);

        const url = `${this.customerURL}/${customer.id}`;

        return this._put(url, body);
    }

    deleteCustomer(customer: CustomerRecord): Promise<void> {
        const url = `${this.customerURL}/${customer.id}`;

        return this._delete(url);
    }
}

