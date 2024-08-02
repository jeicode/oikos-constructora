import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  data: any;
  BASE_URL: string = environment.imagenes_url

  formIsShow: boolean = false;
  // collections
  itemsContact: any[] = []
  itemActive: any;
  indexItemActive!: number;

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.init()
    this.pageService.closeNav();
  }


  async init() {
    await this.getData()
    await this.getCollectionsPage()
  }

  async getData() {
    const data = await this.pageService.getContentPage('contactanos')
    if (data) this.data = data

  }

  async getCollectionsPage() {
    const itemsContact = await this.pageService.getElementsContent('titulo item contacto', 'item_contacto');

    if (itemsContact?.length > 0) this.itemsContact = itemsContact
  }


  activeItemContact(index: number) {
    this.itemActive = this.itemsContact[index]
    this.indexItemActive = index;

    if (index == 1) {
      window.open("https://clientes.oikos.com.co/solicitudoikos/", "_blank");
    } else {
      this.showForm()
    }
  }

  showForm() {
    this.formIsShow = true
  }


}
