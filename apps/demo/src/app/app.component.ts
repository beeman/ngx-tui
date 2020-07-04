import { Component } from '@angular/core';
import { TuiEditorOptions, TuiService } from 'ngx-tui';

@Component({
  selector: 'ngx-tui-root',
  template: `
    <div class="h-100 d-flex">
      <div class="bg-dark">
        <div class="card bg-dark">
          <div class="card-body">
            <div class="btn-group">
              <button (click)="storeHtml()" class="btn btn-outline-success">
                Save HTML
              </button>
              <button (click)="storeMarkdown()" class="btn btn-outline-success">
                Save Markdown
              </button>
            </div>
            <hr />
            <div class="btn-group">
              <button
                (click)="setPreviewStyleTab()"
                class="btn btn-outline-success"
              >
                Preview Style Tab
              </button>
              <button
                (click)="setPreviewStyleVertical()"
                class="btn btn-outline-success"
              >
                Preview Style Vertical
              </button>
            </div>
          </div>
          <div *ngIf="result" class="mt-3 bg-white p-2">
            <pre class="m-0">{{ result }}</pre>
          </div>
        </div>
      </div>
      <div class="flex-grow-1">
        <tui-editor [options]="options"></tui-editor>
      </div>
    </div>
  `,
})
export class AppComponent {
  options: TuiEditorOptions = {
    initialValue: `# Title of Project`,
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    height: '100%',
  };
  result?: string;

  constructor(private readonly service: TuiService) {}

  public storeHtml() {
    this.result = this.service.getHtml();
  }

  public storeMarkdown() {
    this.result = this.service.getMarkdown();
  }

  public setPreviewStyleTab() {
    this.service.changePreviewStyle('tab');
  }

  public setPreviewStyleVertical() {
    this.service.changePreviewStyle('vertical');
  }
}
