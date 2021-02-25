import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { TuiService } from './tui-editor.service';

export interface MarkdownData {
  html: string;
  markdown: string;
}

export interface TuiEditorOptions {
  previewStyle?: 'tab' | 'vertical';
  previewHighlight?: boolean;
  initialEditType?: 'markdown' | 'wysiwyg';
  initialValue?: string;
  height?: string;
  minHeight?: string;
  language?: string;
  useDefaultHTMLSanitizer?: boolean;
  useCommandShortcut?: boolean;
  usageStatistics?: boolean;
  toolbarItems?: string[];
  hideModeSwitch?: boolean;
  linkAttribute?: any;
  extendedAutolinks?: boolean;
  customConvertor?: any;
  customHTMLRenderer?: any;
  referenceDefinition?: boolean;
  customHTMLSanitizer?: (params: any) => any;
}

@Component({
  selector: 'tui-editor',
  encapsulation: ViewEncapsulation.None,
  template: '<div #editor class = "ngx-tui-editor"></div>',
})
export class TuiComponent implements AfterViewInit {
  @ViewChild('editor')
  editorElement: ElementRef;

  @Input() options: TuiEditorOptions;
  editor: any;
  events = {
    change: this.changed.bind(this),
    load: this.loadedEditor.bind(this),
    blur: this.blur.bind(this),
  };

  @Output() loaded: EventEmitter<void> = new EventEmitter<void>();
  @Output() onChangeMarkdown: EventEmitter<string> = new EventEmitter<string>();
  @Output() onChangeHTML: EventEmitter<string> = new EventEmitter<string>();
  @Output() onChange: EventEmitter<MarkdownData> = new EventEmitter<
    MarkdownData
  >();
  @Output() onBlurMarkdown: EventEmitter<string> = new EventEmitter<string>();
  @Output() onBlurHTML: EventEmitter<string> = new EventEmitter<string>();
  @Output() onBlur: EventEmitter<MarkdownData> = new EventEmitter<
    MarkdownData
  >();

  constructor(private editorService: TuiService) {}
  public ngAfterViewInit() {
    this.getEditor();
  }

  async getEditor() {
    this.editor = await this.editorService.createEditor({
      events: this.events,
      ...this.options,
      el: this.editorElement.nativeElement,
    });
  }

  loadedEditor() {
    this.loaded.emit();
  }

  changed() {
    this.onChangeMarkdown.emit(
      this.editor.getMarkdown((this.options as any).editorId)
    );
    this.onChangeHTML.emit(this.editor.getHtml((this.options as any).editorId));
    this.onChange.emit({
      html: this.editor.getHtml((this.options as any).editorId),
      markdown: this.editor.getMarkdown((this.options as any).editorId),
    });
  }

  blur() {
    this.onBlurMarkdown.emit(
      this.editor.getMarkdown((this.options as any).editorId)
    );
    this.onBlurHTML.emit(this.editor.getHtml((this.options as any).editorId));
    this.onBlur.emit({
      html: this.editor.getHtml((this.options as any).editorId),
      markdown: this.editor.getMarkdown((this.options as any).editorId),
    });
  }
}
