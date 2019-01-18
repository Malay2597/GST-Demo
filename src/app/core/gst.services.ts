import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ICategory } from '../shared/model/ICategory.interface';


@Injectable()
export class GstService {

    private itemDetails = {} as ICategory;

    constructor(private http: HttpClient) { }

    //get products from server
    getCategory(): Observable<any> {
        return this.http.get<any>('http://localhost:8000/getCategory')
    }

    //add category to server
    addCategory(product): Observable<any> {

        return this.http.post<any>('http://localhost:8000/addCategory', product);
    }

    //setter for items
    setitemDetails(category,amount) {
        console.log(category);
        this.itemDetails.name = category.CATEGORYNAME;
        this.itemDetails.gst = category.GST;
        this.itemDetails.amount = amount;
    }

    //getter for items
    getItemDetails()
    {
        return this.itemDetails;
    }
}
