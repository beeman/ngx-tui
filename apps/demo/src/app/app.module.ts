import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'full' },
        {
          path: 'empty',
          loadChildren: () =>
            import('./demos/empty/empty.module').then((m) => m.EmptyModule),
        },
        {
          path: 'full',
          loadChildren: () =>
            import('./demos/full/full.module').then((m) => m.FullModule),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
