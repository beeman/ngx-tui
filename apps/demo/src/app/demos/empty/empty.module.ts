import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TuiModule } from 'ngx-tui';
import { EmptyComponent } from './empty.component';

const routes: Routes = [{ path: '', component: EmptyComponent }];

@NgModule({
  declarations: [EmptyComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TuiModule],
})
export class EmptyModule {}
