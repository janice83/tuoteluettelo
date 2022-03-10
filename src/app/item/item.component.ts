import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PhoneService } from '../phone.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStopCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  phoneId: string = '';
  productList: any[] | undefined;
  item: any = '';
  allready: boolean = false;
  check = faCheck;
  notCheck = faStopCircle;
  getSrc: string = ''; 


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private phoneService: PhoneService) { 
   
    
  }

  ngOnInit(): void {
    this.getPhone();
  }


  getPhone(): void {
    this.phoneId = this.route.snapshot.params['id'];
    this.route.params.subscribe((params) => {
      this.phoneId = params['id'];
    });
    this.phoneService.getOneItem(this.phoneId).subscribe(((data: any) => {
      this.item = data;
      this.allready = true;
    }));
  }

  changeImage(event: any) {
    this.getSrc = event.target.getAttribute('src');
    document.getElementById("bigImage")?.setAttribute("src", this.getSrc);
  }

  goBack(): void {
    this.location.back();
  }

}
