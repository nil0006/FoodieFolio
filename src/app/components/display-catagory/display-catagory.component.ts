import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-display-catagory',
  templateUrl: './display-catagory.component.html',
  styleUrls: ['./display-catagory.component.scss']
})
export class DisplayCatagoryComponent implements OnInit{
constructor(private meal:MealService,private router:Router){}
public allCatagory:any=[];
  ngOnInit(): void {
    this.meal.getAllCatagory().subscribe((res:any)=>{
      console.log(res);
      this.allCatagory=res.categories
      
    })
  }
  goToRecipeCatagory(catagory:any){
    this.router.navigate(['catagory'], {queryParams:{catagory:catagory} })
  }
}
