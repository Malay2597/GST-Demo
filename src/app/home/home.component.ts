import { Component, OnInit } from '@angular/core';
import { GstService } from '../core/gst.services';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'


})
export class HomeComponent implements OnInit {

  productList = [];



  constructor(private gstservice: GstService, private route: Router) { }

  ngOnInit() {
    this.gstservice.getCategory().subscribe((product) => {
      this.productList = product;
    });
  }


  calculateGst(category, amount) {

    this.gstservice.setitemDetails(category, amount);
    this.route.navigateByUrl("/show")

  }

} 