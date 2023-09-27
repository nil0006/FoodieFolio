import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-catagroy',
  templateUrl: './all-catagroy.component.html',
  styleUrls: ['./all-catagroy.component.scss']
})
export class AllCatagroyComponent implements OnInit{
  catagoryName:any
  allMeal:any=[]
  constructor(private router:Router,private activeRoute:ActivatedRoute,private meal:MealService,private _location: Location){

  }
ngOnInit(): void {
  this.activeRoute.queryParams.subscribe((res:any)=>{
    this.catagoryName=res.catagory;
   this.meal.filterByCatagory(res.catagory).subscribe((res:any)=>{
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
