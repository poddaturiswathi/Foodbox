import { Component } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent {
  fff:Food=new Food();
  router: any;
  navigate: any;
  constructor(private ar:FoodService){}

  

  additem(){
    this.ar.addfooditem(this.fff).subscribe(data=>{
      
      console.log(data);
      alert("done");
     // this.navigate(['res']);
    });
  }

  
}
