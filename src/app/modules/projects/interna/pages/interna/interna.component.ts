import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/functions/config.service';

@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.css']
})
export class InternaComponent implements OnInit {

  constructor(private configServ: ConfigService) { }

  ngOnInit(): void {
    this.configServ.loadHeroProyectos(1000);
  }

}
