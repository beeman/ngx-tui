import { Component } from '@angular/core';
import { TuiEditorOptions } from 'ngx-tui';

@Component({
  templateUrl: './empty.component.html',
})
export class EmptyComponent {
  options: TuiEditorOptions = {
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    height: '100%',
    placeholder: 'Enter your markdown here!',
  };
}
