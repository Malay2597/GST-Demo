import { Component, OnInit } from '@angular/core';
import { GstService } from '../core/gst.services';
import { NgForm } from '@angular/forms';
import { IResponse } from '../shared/model/IResponse.interface';

@Component({
    selector: 'app-addCategory',
    templateUrl: './addCategory.component.html'


})
export class addCategoryComponent {

    constructor(private gstservice: GstService) { }

    Form: any = {}
    showError: any;
    showMessage: any;

    onSubmit(f: NgForm) {
        this.gstservice.addCategory(this.Form).subscribe((res: IResponse) => {
            if (res.isError) {
                this.showError = res.text;
                this.showMessage = '';
            }
            else {
                this.showMessage = res.text;
                this.showError = '';
            }
        });
        f.resetForm();
    }



}






