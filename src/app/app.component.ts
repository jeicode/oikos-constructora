import { Component, OnInit } from '@angular/core';
import { ConfigService } from './shared/services/functions/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private configServ: ConfigService) { }

  ngOnInit() { }
  
  onActivate() {
    this.configServ.goUpPage()
  }

}
