import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TuiModule } from 'ngx-tui';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    TuiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
