import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalledesportComponent } from './salledesport/salledesport.component';
import { AddSalledesportComponent } from './add-salledesport/add-salledesport.component';
import { FormsModule } from '@angular/forms';
import { UpdateSalledesportComponent } from './services/update-salledesport/update-salledesport.component';


@NgModule({
  declarations: [
    AppComponent,
    SalledesportComponent,
    AddSalledesportComponent,
    UpdateSalledesportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
