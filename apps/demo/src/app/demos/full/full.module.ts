import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuiModule } from 'ngx-tui';
import { FullComponent } from './full.component';

const routes: Routes = [{ path: '', component: FullComponent }];

@NgModule({
  declarations: [FullComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TuiModule],
})
export class FullModule {}
