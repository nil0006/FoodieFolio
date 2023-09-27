import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllCatagroyComponent } from './components/all-catagroy/all-catagroy.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { DisplayCatagoryComponent } from './components/display-catagory/display-catagory.component';
import { DisplayItemsComponent } from './components/display-items/display-items.component';
import { AllCountryComponent } from './components/all-country/all-country.component';
import { SearchDataComponent } from './components/search-data/search-data.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ShareDialogComponent } from './components/share-dialog/share-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClipboardModule } from '@angular/cdk/clipboard';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    AllCatagroyComponent,
    AllItemsComponent,
    DisplayCatagoryComponent,
    DisplayItemsComponent,
    AllCountryComponent,
    SearchDataComponent,
    ShareDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    FontAwesomeModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    MatTabsModule,
    MatDialogModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
