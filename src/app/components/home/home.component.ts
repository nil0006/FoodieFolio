import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public catagories: any = [];
  public items: any = [];
  public randomMeal: any;
  searchText: string = '';
  public value: any = '';
  public countryCodes = [
    { country: 'Indian', code: 'in' },
    { country: 'American', code: 'us' },
    { country: 'British', code: 'gb' },
    { country: 'Canadian', code: 'ca' },
    { country: 'Chinese', code: 'cn' },
    { country: 'Croatian', code: 'hr' },
    { country: 'Dutch', code: 'nl' },
    { country: 'Egyptian', code: 'eg' },
    { country: 'Filipino', code: 'ph' },
    { country: 'French', code: 'fr' },
    { country: 'Greek', code: 'gr' },
    { country: 'Irish', code: 'ie' },
    { country: 'Italian', code: 'it' },
    { country: 'Jamaican', code: 'jm' },
    { country: 'Japanese', code: 'jp' },
    { country: 'Kenyan', code: 'ke' },
    { country: 'Malaysian', code: 'my' },
    { country: 'Mexican', code: 'mx' },
    { country: 'Moroccan', code: 'ma' },
    { country: 'Polish', code: 'pl' },
    { country: 'Portuguese', code: 'pt' },
    { country: 'Russian', code: 'ru' },
    { country: 'Spanish', code: 'es' },
    { country: 'Thai', code: 'th' },
    { country: 'Tunisian', code: 'tn' },
    { country: 'Turkish', code: 'tr' },
    { country: 'Vietnamese', code: 'vn' },
  ];

  constructor(
    private meal: MealService,
    private router: Router,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.meal.getAllCatagory().subscribe((res: any) => {
      this.catagories = res.categories.slice(0, -(res.categories.length - 5));
    });
    this.meal.getAllArea().subscribe((res: any) => {
      console.log(res);
    });
    this.meal.getAllItems().subscribe((res: any) => {
      this.items = res.meals.slice(0, -(res.meals.length - 5));
    });
    this.getOneRandomMeal();
  }
  returnSourse(itemName: string) {
    return `https://www.themealdb.com/images/ingredients/${itemName}.png`;
  }
  getOneRandomMeal() {
    this.meal.getOneRandomMeal().subscribe((res: any) => {
      this.randomMeal = res.meals[0];
    });
  }
  goToRecipeCatagory(catagory: any) {
    this.router.navigate(['catagory'], { queryParams: { catagory: catagory } });
  }
  goToRecipeItem(item: any) {
    this.router.navigate(['items'], { queryParams: { item: item } });
  }
  goToSeeAllCatagory() {
    this.router.navigate(['all-catagory']);
  }
  goToSeeAllItems() {
    this.router.navigate(['all-items']);
  }
  goToRecipe(mealId: number) {
    this.router.navigate(['recipe'], { queryParams: { mealId } });
  }
  goToCountry(country: string) {
    this.router.navigate(['country'], { queryParams: { country } });
  }
  navigateToSearch() {
    this.router.navigate(['search'], {
      queryParams: { search: this.searchText },
    });
  }
  shareDialog() {
    this.dialog.open(ShareDialogComponent, {});
  }
}
