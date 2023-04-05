import { Component } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent {
  fo: Food[]= [];

  constructor(private se:FoodService){}

  ngOnInit():void{
    this.getitems();
  }


getitems(){
  this.se.getfooditems().subscribe(data=>{
    this.fo=data
  });
}

Deletefooditem(id:number){
this.se.deleteitem(id).subscribe(data=>{
  this.getitems();
})
}
}
