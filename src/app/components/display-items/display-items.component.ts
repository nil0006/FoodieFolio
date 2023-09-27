import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.scss']
})
export class DisplayItemsComponent implements OnInit{
  constructor(private meal:MealService,private router:Router) {
    
  }
  items:any=[]
  ItemSearchData:string=''
  copyItem:any=[]
ngOnInit(): void {
  this.meal.getAllItems().subscribe((res:any)=>{
    this.items=res.meals
    this.copyItem=res.meals
    console.log(this.items);
    
  })
}
returnSourse(itemName:string){
  return `https://www.themealdb.com/images/ingredients/${itemName}.png`
  }
  
  SearchItem(){
    this.items=this.copyItem.filter((ele:any)=>{
      if(ele.strIngredient.toLowerCase().includes(this.ItemSearchData.toLowerCase())){
        return ele;
      }
    })
  }
  goToRecipeItem(item:any){
    this.router.navigate(['items'], {queryParams:{item:item} })
  
  }
}
