import { NgOptimizedImage } from '@angular/common';
import { Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';
import { CsService } from 'src/app/shared/services/functions/cs.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './why-choose-us.component.html',
  styleUrl: '../../home-page.component.css'
})
export class WhyChooseUsComponent implements OnInit {

  cs = inject(CsService);

  IMG_URL = signal(environment.imagenes_url)
  @Input() data:WritableSignal<any> = signal(undefined);

  itemsWhyChooseUs:WritableSignal<any> = signal([])

  pageService = inject(PageService)

  async ngOnInit() {
    console.log('%csrc/app/modules/home/components/why-choose-us/why-choose-us.component.ts:26 "object"', 'color: #007acc;', "object");
    const data = await this.pageService.getElementsContent('titulo item por que elegirnos home','item_elegirnos_home');    
    this.itemsWhyChooseUs.set(data);
    this.cs.loadCEvent.update(i => i.concat('app-why-choose-us'));
  }

}
