import { Component, OnInit } from '@angular/core';
import { GstService } from '../core/gst.services';
import { ICategory } from '../shared/model/ICategory.interface';



@Component({
    selector: 'app-showGst',
    templateUrl: './showGst.component.html'



})
export class showGstComponent implements OnInit {

    item = {} as ICategory
    totalGst: number;

    constructor(private gstservice: GstService) { }

    ngOnInit() {
        this.item = this.gstservice.getItemDetails();
        this.totalGst = (this.item.amount) * (this.item.gst / 100);
    }
}