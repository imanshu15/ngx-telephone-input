import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { CustomDropdownPipe } from './custom-dropdown/custom-dropdown.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CustomDropdownPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
