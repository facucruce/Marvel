import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    const userLanguage = navigator.language || navigator.language;
    this.translate.use(userLanguage);
  }
}
