import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-org-header',
  template:`
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <div class="container">
      <a class="navbar-brand">{{logo}}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <!-- <a routerLink="/" class="nav-link">Home </a> -->
          </li>
          <li class="nav-item">
            <!-- <a routerLink="/cart/" class="nav-link">Cart </a> -->
          </li>
          <li class="nav-item">
            <a class="nav-link">Cart {{count}}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() logo = '';
  @Input() count = 0;
}
