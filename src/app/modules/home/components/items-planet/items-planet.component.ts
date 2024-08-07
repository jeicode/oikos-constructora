import { NgOptimizedImage } from '@angular/common';
import { Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageService } from 'src/app/shared/services/api/page.service';
import { environment } from 'src/environments/environment';

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
export class ItemsPlanetComponent implements OnInit {

  IMG_URL = signal(environment.imagenes_url)

  @Input() data: WritableSignal<any> = signal(undefined)

  itemsPlanet: WritableSignal<any> = signal([])
  pageService = inject(PageService);


  async ngOnInit() {
    const data = await this.pageService.getElementsContent('titulo seccion planeta home', 'item_seccion_planeta_home');
    this.itemsPlanet.set(data)
  }



}
