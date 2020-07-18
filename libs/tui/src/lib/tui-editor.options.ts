export interface TuiEditorOptions {
  customConvertor?: any;
  customHTMLRenderer?: any;
  customHTMLSanitizer?: (params: any) => any;
  editorId?: string;
  extendedAutolinks?: boolean;
  height?: string;
  hideModeSwitch?: boolean;
  initialEditType?: 'markdown' | 'wysiwyg';
  initialValue?: string;
  language?: string;
  linkAttribute?: any;
  minHeight?: string;
  placeholder?: string;
  previewHighlight?: boolean;
  previewStyle?: 'tab' | 'vertical';
  referenceDefinition?: boolean;
  toolbarItems?: string[];
  usageStatistics?: boolean;
  useCommandShortcut?: boolean;
  useDefaultHTMLSanitizer?: boolean;
}
