import { Injectable } from '@angular/core';
import Editor from '@toast-ui/editor';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import hljs from 'highlight.js/lib/highlight';

import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import markdown from 'highlight.js/lib/languages/markdown';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';

import { highlightjsGraphql } from './highlightjs.graphql';

hljs.registerLanguage('graphql', highlightjsGraphql);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('xml', xml);

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/htmlmixed/htmlmixed';

@Injectable()
export class TuiService {
  editor: any = {};
  defaultId = 'ngx-editor-default';
  constructor() {}
  createEditor(options: any): any {
    const id = options.editorId || this.defaultId;
    this.editor[id] = Editor.factory(
      Object.assign(
        {
          el: document.querySelector('.ngx-tui-editor'),
          initialEditType: 'markdown',
          previewStyle: 'vertical',
          height: '300px',
        },
        { ...options, plugins: [[codeSyntaxHighlight, { hljs }]] }
      )
    );

    return this.editor[id];
  }

  changePreviewStyle(style: 'tab' | 'vertical', id?: string): void {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      return this.editor[id].changePreviewStyle(style);
    }
    return;
  }
  getMarkdown(id?: string): string {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      return this.editor[id].getMarkdown();
    }
    return '';
  }
  getHtml(id?: string): string {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      return this.editor[id].getHtml();
    }
    return '';
  }
  getSelectedText(id?: string): string {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      return this.editor[id].getSelectedText();
    }
    return '';
  }
  insertText(text: string, id?: string) {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      this.editor[id].insertText(text);
    }
  }
  setHtml(text: string, id?: string) {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      this.editor[id].setHtml(text);
    }
  }
  setMarkdown(text: string, id?: string) {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      this.editor[id].setMarkdown(text);
    }
  }
  hide(id?: string) {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      return this.editor[id].hide();
    }
  }
  show(id?: string) {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      return this.editor[id].show();
    }
  }
}
