import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports:[CommonModule, RouterModule],
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
