import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BadgesComponent } from './badges/badges.component';
import { CardComponent } from './card/card.component';
import { JSComponent } from './js/js.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'badges',component:BadgesComponent},
  {path:'card',component:CardComponent},
  {path:'javascript',component:JSComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BadgesComponent,
    CardComponent,
    JSComponent,
  ],
  imports: [
    BrowserModule,MatMenuModule,MatListModule,MatTreeModule,MatTableModule,MatSliderModule,MatStepperModule,MatSnackBarModule,MatSlideToggleModule,MatTooltipModule,MatPaginatorModule,MatTabsModule,MatRadioModule,MatProgressBarModule,MatProgressSpinnerModule,MatExpansionModule,MatInputModule,RouterModule.forRoot(routes),MatChipsModule,MatDialogModule,MatDatepickerModule,MatDividerModule,BrowserAnimationsModule,MatIconModule,MatButtonToggleModule,
    AppRoutingModule,MatSelectModule,MatFormFieldModule,MatSidenavModule,MatCheckboxModule,MatToolbarModule,MatButtonModule,MatBadgeModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
