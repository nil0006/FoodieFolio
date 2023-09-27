import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.scss'],
})
export class SearchDataComponent implements OnInit {
  searchText: any;
  allMeal: any;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private meal: MealService,
    private _location: Location
  ) {}
  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((res: any) => {
      this.searchText = res.search;
      this.meal.getSearchApi(res.search).subscribe((res: any) => {
        if (res) {
          this.allMeal = res.meals;
        }
      });
    });
  }
  back() {
    this._location.back();
  }
  goToRecipe(mealId: number) {
    this.router.navigate(['recipe'], { queryParams: { mealId } });
  }
}
