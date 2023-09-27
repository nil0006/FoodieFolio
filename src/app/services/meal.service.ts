import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MealService {
  public baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
  constructor(private http: HttpClient) {}

  searchMeal() {}
  getAllCatagory() {
    return this.http.get(this.baseUrl + 'categories.php');
  }
  getAllArea() {
    return this.http.get(this.baseUrl + 'list.php?a=list');
  }
  getAllItems() {
    return this.http.get(this.baseUrl + 'list.php?i=list');
  }
  getOneRandomMeal() {
    return this.http.get(this.baseUrl + 'random.php');
  }
  filterByIngredient(itemName: string) {
    return this.http.get(this.baseUrl + 'filter.php?i=' + itemName);
  }
  filterByCatagory(catagoryName: string) {
    return this.http.get(this.baseUrl + 'filter.php?c=' + catagoryName);
  }
  filterByCountry(country: string) {
    return this.http.get(this.baseUrl + 'filter.php?a=' + country);
  }
  getMealById(mealId: string) {
    return this.http.get(this.baseUrl + 'lookup.php?i=' + mealId);
  }
  getSearchApi(searchText: string) {
    return this.http.get(this.baseUrl + 'search.php?s=' + searchText);
  }
}
