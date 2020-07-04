import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiComponent } from './tui-editor.component';
import { TuiService } from './tui-editor.service';

@NgModule({
  imports: [CommonModule],
  declarations: [TuiComponent],
  exports: [TuiComponent],
  providers: [TuiService],
})
export class TuiModule {}
