import { Component } from '@angular/core';
import { TuiEditorOptions, TuiService } from 'ngx-tui';

@Component({
  selector: 'ngx-tui-full',
  templateUrl: './full.component.html',
})
export class FullComponent {
  markdown = `# This is your Markdown

This is GraphQL
\`\`\`graphql
fragment UserDetails on User {
  username
  email
  avatarUrl
}

mutation Login($username: String! $password: String!) {
  login(username: $username password: $password) {
    token
    ...UserDetails
  }
}
\`\`\`

This is HTML
\`\`\`html
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>
\`\`\`
This is Markdown
\`\`\`markdown
# My Title

- an
- unordered
- list

1. an
1. ordered
1. list

**This** _is_ \`code\`.
\`\`\`

This is TypeScript
\`\`\`typescript
const key: string = 'value';
\`\`\`


`;
  options: TuiEditorOptions = {
    initialValue: this.markdown,
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
