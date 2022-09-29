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

  setUpMetaTags(seoPage:SeoPage) {
    if (seoPage){
      var canonical = '';
      if(seoPage.canonical!=''){
        canonical = seoPage.canonical;
      }
      this.updateCanonicalUrl(canonical);
      this.titlePage.setTitle(seoPage.title)
      this.meta.updateTag({ name: 'description', content: seoPage.metadescription });
      this.meta.updateTag({ name: 'robots', content: seoPage.metarobots });
    }
  }
}
