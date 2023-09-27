import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AllCatagroyComponent } from './components/all-catagroy/all-catagroy.component';
import { DisplayItemsComponent } from './components/display-items/display-items.component';
import { DisplayCatagoryComponent } from './components/display-catagory/display-catagory.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { AllCountryComponent } from './components/all-country/all-country.component';
import { SearchDataComponent } from './components/search-data/search-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'items', component: AllItemsComponent },
  { path: 'all-items', component: DisplayItemsComponent },
  { path: 'catagory', component: AllCatagroyComponent },
  { path: 'all-catagory', component: DisplayCatagoryComponent },
  { path: 'country', component: AllCountryComponent },
  { path: 'search', component: SearchDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
