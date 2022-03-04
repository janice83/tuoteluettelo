import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Observable } from 'rxjs';
import { OrderByPipe } from '../pipes/.pipe';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  phones:any = []
  order= '';
  searchText = '';

  selectOrder(event: any) {
    this.order = event.target.value;
  }


  constructor(public phoneService: PhoneService, private orderByPipe: OrderByPipe) { 

  }

  

  getPhones(): void {
    this.phoneService.getAllItems().subscribe((res: any)=>{
      this.phones = res
      this.phones.sort((a: { age: number; }, b: { age: number; }) => (a.age < b.age) ? 1 : (a.age === b.age) ? ((a.age < b.age) ? 1 : -1) : -1 );
      console.log(this.phones)
    })
  }

  ngOnInit(): void {
    this.getPhones();
  }

}
