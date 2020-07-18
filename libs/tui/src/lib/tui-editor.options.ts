export interface TuiEditorOptions {
  previewStyle?: 'tab' | 'vertical';
  previewHighlight?: boolean;
  initialEditType?: 'markdown' | 'wysiwyg';
  initialValue?: string;
  height?: string;
  minHeight?: string;
  editorId?: string;
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
