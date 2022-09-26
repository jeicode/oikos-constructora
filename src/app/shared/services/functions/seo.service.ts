import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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

  setUpMetaTags() {
    if (this.pageService.currentPage){

      var canonical = '';
      if(this.pageService.currentPage.canonical!=''){
        canonical = this.pageService.currentPage.canonical;
      }
      this.updateCanonicalUrl(canonical);

      this.titlePage.setTitle(this.pageService.currentPage['title'])
      this.meta.updateTag({ name: 'description', content: this.pageService.currentPage['metadescription'] });
      this.meta.updateTag({ name: 'robots', content: this.pageService.currentPage['metarobots'] });
    }
  }
}
