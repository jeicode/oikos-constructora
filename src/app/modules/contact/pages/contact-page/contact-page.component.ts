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
  BASE_URL:string = environment.base_url

  formIsShow:boolean = false;
  // collections
  itemsContact: any[] = []
  itemActive: any;
  indexItemActive!:number;

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.init()
  }


  async init() {
    const tasks = [
      () => this.getData(),
      () => this.getCollectionsPage()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  async getData() {
    const data = await this.pageService.getContentPage('contactanos')
    if (data) this.data = data
    
  }

  async getCollectionsPage() {
    const itemsContact = await this.pageService.getElementsContent('titulo item contacto', 'item_contacto');
    
    if (itemsContact?.length > 0) this.itemsContact = itemsContact
  }


  activeItemContact(index:number){
    this.itemActive = this.itemsContact[index]
    this.indexItemActive = index;
    this.showForm()
  }

  showForm(){
    this.formIsShow = true
  }

  
}
