import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-info">
      <div class="container">
            <!-- logo -->
        <div class="navbar-brand">
          <a routerLink="/" class="navbar-item">Gif Battles</a>
        </div>
        <!-- menu -->
        <div class="navbar-menu">
          <div class="navbar-end">
            <a routerLink="/" class="navbar-item">
                <span class="glyphicon glyphicon-flag" aria-hidden="true"></span>
                Battle
             </a>
            <a routerLink="create" class="navbar-item">
                <span class="glyphicon glyphicon-compressed" aria-hidden="true"></span>
                Create
            </a>
            <a routerLink="leaderboard" class="navbar-item">
                <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                Leaderboard
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
