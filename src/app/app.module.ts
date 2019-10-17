import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatTableModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { HomeComponent } from './home/home.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search.pipe';
import { MatSidenavModule,MatToolbarModule,MatIconModule,MatMenuModule,MatCardModule,} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSortModule} from '@angular/material/sort';
import { GridComponent } from './grid/grid.component';r
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';


@NgModule({
  declarations: [
    
    AppComponent,
    ContactlistComponent,
    HomeComponent,
    SearchPipe,
    GridComponent,
  ],
  imports: [
    BrowserModule,MatCardModule,ReactiveFormsModule,
    HttpClientModule,ScrollingModule,FormsModule,MatSortModule,MatMenuModule,MatSidenavModule,
    MatToolbarModule,MatTableModule,AppRoutingModule,
    BrowserAnimationsModule,MatTabsModule,
    NgxPaginationModule,MatDividerModule,
    MatButtonModule,FormsModule,CommonModule,
    MatIconModule,MatInputModule, MatCardModule, MatIconModule,
    MatFormFieldModule,MatSelectModule,MatDialogModule,
    MatDatepickerModule,MatExpansionModule,FormsModule,ScrollingModule,MatRadioModule,MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBA1yR7-h1ZIX5U9h3u_Rm_GwaKbUCueQg',
      libraries:['places']
    })
  ],
  providers: [
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
