import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent implements OnInit{
  itemName:any;
  allMeal:any;
constructor(private router:Router,private activeRoute:ActivatedRoute,private meal:MealService,private _location: Location){

}
ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((res:any)=>{
      this.itemName=res.item;
      this.meal.filterByIngredient(res.item).subscribe((res:any)=>{
        this.allMeal=res.meals
      })
    })
}
back(){
this._location.back();
}
goToRecipe(mealId:number){
  this.router.navigate(['recipe'],{queryParams:{mealId}})
  }
}
