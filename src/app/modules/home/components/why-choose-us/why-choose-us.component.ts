import { NgOptimizedImage } from '@angular/common';
import { Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './why-choose-us.component.html',
  styleUrl: '../../home-page.component.css'
})
export class WhyChooseUsComponent implements OnInit {

  IMG_URL = signal(environment.imagenes_url)
  @Input() data: WritableSignal<any> = signal(undefined);

  itemsWhyChooseUs: WritableSignal<any> = signal([])

  pageService = inject(PageService)

  async ngOnInit() {
    const data = await this.pageService.getElementsContent('titulo item por que elegirnos home', 'item_elegirnos_home');
    this.itemsWhyChooseUs.set(data);
  }

}
