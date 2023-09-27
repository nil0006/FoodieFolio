import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit{
  constructor(private router:Router,private activeRoute:ActivatedRoute,private meal:MealService,private _location: Location){

  }
  public mealData:any;
  public ingredientsArray :any=[];

  ngOnInit(): void {
      this.activeRoute.queryParams.subscribe((res:any)=>{
        this.getMeal(res.mealId)
      })
  }
  back(){
    this._location.back();
    }
    getMeal(mealId:string){
      this.meal.getMealById(mealId).subscribe((res:any)=>{
        this.mealData=res.meals[0]
        this.setObjectData(res.meals[0])
      })
    }
    setObjectData(mealData:any){

      for (let i = 1; i <= 20; i++) {
          const ingredientKey = `strIngredient${i}`;
          const measureKey = `strMeasure${i}`;
      
          if (mealData[ingredientKey] && mealData[measureKey]) {
              const ingredientObject = {
                  ingredient: mealData[ingredientKey],
                  measure: mealData[measureKey]
              };
              this.ingredientsArray.push(ingredientObject);
          }
      }
      console.log(this.ingredientsArray);
      
    }

}
