import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tui-root',
  template: `
    <div class="d-flex flex-column h-100">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" routerLinkActive="active" routerLink="/"
          >ngx-tui</a
        >
        <div class="mr-auto"></div>
        <div class="navbar-expand">
          <div class="navbar-nav">
            <a
              class="nav-item nav-link"
              routerLinkActive="text-primary"
              routerLink="/full"
              >Full</a
            >
            <a
              class="nav-item nav-link"
              routerLinkActive="text-primary"
              routerLink="/empty"
              >Empty</a
            >
          </div>
        </div>
      </nav>
      <main class="flex-shrink-0 flex-grow-1">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class AppComponent {}
