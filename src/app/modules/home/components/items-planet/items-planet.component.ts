import { NgOptimizedImage } from '@angular/common';
import { Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageService } from 'src/app/shared/services/api/page.service';

@Component({
  selector: 'app-items-planet',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './items-planet.component.html',
  styleUrl: '../../home-page.component.css'
})
export class ItemsPlanetComponent implements OnInit{
  
  @Input() data:any

  itemsPlanet: WritableSignal<any> = signal([])
  pageService = inject(PageService);
  

  async ngOnInit() {
    const data = await this.pageService.getElementsContent('titulo seccion planeta home','item_seccion_planeta_home');
    this.itemsPlanet.set(data)
  }



}
