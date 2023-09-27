import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-country',
  templateUrl: './all-country.component.html',
  styleUrls: ['./all-country.component.scss']
})
export class AllCountryComponent implements OnInit {
  allMeal:any=[]
  constructor(private router:Router,private activeRoute:ActivatedRoute,private meal:MealService,private _location: Location){

  }
  public countryName:string=''
ngOnInit(): void {
  this.activeRoute.queryParams.subscribe((res:any)=>{
    this.countryName=res.country;
   this.meal.filterByCountry(res.country).subscribe((res:any)=>{
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
