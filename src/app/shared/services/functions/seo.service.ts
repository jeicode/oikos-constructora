import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoPage } from 'src/app/core/models/seo-page.model';
import { PageService } from '../api/page.service';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta,
              private pageService:PageService,
              @Inject(DOCUMENT) private doc: Document,
              private titlePage: Title) { }

  updateCanonicalUrl(canonical:string = "") {

    let element: HTMLLinkElement | null = this.doc.querySelector(`link[rel='canonical']`) || null

    if (!element) { // create canonical element
      element = this.doc.createElement('link');
    }

    element.setAttribute('rel','canonical')
    canonical ? element.setAttribute('href',canonical) : element.setAttribute('href', this.doc.URL);
    this.doc.head.appendChild(element);
  }

  createTagsLink(){

    let element: HTMLLinkElement | null = this.doc.querySelector(`link[hreflang='es-co']`) || null
    if (!element) { // create canonical element
      element = this.doc.createElement('link');
    }
    element.setAttribute('href','https://www.oikos.com.co/constructora/proyectos-construccion-vivienda');

    let element2: HTMLLinkElement | null = this.doc.querySelector(`link[hreflang='x-default']`) || null
    if (!element2) { // create canonical element
      element2 = this.doc.createElement('link');
    }
    element2.setAttribute('href','https://www.oikos.com.co/constructora/proyectos-construccion-vivienda');

    let element3: HTMLLinkElement | null = this.doc.querySelector(`link[hreflang='en-us']`) || null
    if (!element3) { // create canonical element
      element3 = this.doc.createElement('link');
    }
    element3.setAttribute('href','https://www.oikosconstructora.us/housing-projects');

    this.doc.head.appendChild(element);
    this.doc.head.appendChild(element2);
    this.doc.head.appendChild(element3);
  }

  setUpMetaTags(seoPage:SeoPage) {
    if (seoPage){
      var canonical = '';
      if(seoPage.canonical!=''){
        canonical = seoPage.canonical;
      }
      this.updateCanonicalUrl(canonical);
      //this.createTagsLink();
      this.titlePage.setTitle(seoPage.title)
      this.meta.updateTag({ name: 'description', content: seoPage.metadescription });
      //this.meta.updateTag({ name: 'robots', content: seoPage.metarobots });
    }
  }
}
