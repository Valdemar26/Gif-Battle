import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Gif Battles</strong> by <a  target="_blank" href="http://vz.zzz.com.ua">Valdemar</a>
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
        background-color: #38a7f0;
    }
`]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
