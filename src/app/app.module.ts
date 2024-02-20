import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SafePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
