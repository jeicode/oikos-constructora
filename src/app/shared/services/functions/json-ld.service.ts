import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JsonLDService {

  constructor(@Inject(DOCUMENT) private _document: Document) { }

  /**
   * 
   * @returns Home schema static values
   */
  getHomeSchema():Record<string, any> {
    let schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "OIKOS Constructora",
      "url": "https://www.oikos.com.co/constructora/",
      "logo": "https://www.oikos.com.co/constructora/logo_constructora.38d078bd10a91c19.svg",
      "sameAs": [
        "https://www.facebook.com/oikosconstructora",
        "https://twitter.com/oikosconstr",
        "https://www.instagram.com/oikos_constructora/",
        "https://www.youtube.com/channel/UCGYegtZ2w7LVLu_LcOtxdTA",
        "https://www.linkedin.com/company/grupo-empresarial-oikos/"
      ]
    }
    return schema;
  }

  /**
   * 
   * @param blog blog to set dynamic values
   * @returns Record Schema blog
   */
  getBlogSchema(blog: any):Record<string, any> {
    let schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": this._document.URL
      },
      "headline": blog.title_new || blog.title,
      "image": environment.imagenes_url + blog.imagen,  
      "author": {
        "@type": "organization",
        "name": "OIKOS Constructora"
      },  
      "publisher": {
        "@type": "Organization",
        "name": "OIKOS Constructora",
        "logo": {
          "@type": "ImageObject",
          "url": environment.imagenes_url + 'logo_constructora.svg'
        }
      },
      "datePublished": blog.date,
      "dateModified": blog.fecha_modificacion
    }

    return schema;
  }

  /**
   * 
   * @param className specific class name to remove element in DOM
   */
  removeElementHeadByClass(className:string){
    let scripts:HTMLCollectionOf<any> = this._document.head.getElementsByClassName(`${className}`);
    if (scripts?.length > 0){
      for (let index = 0; index < scripts.length; index++) {
        const element = scripts[index];
        this._document.head.removeChild(element)        
      }
    }
  }


  /**
   * 
   * @param schema schema object to insert in the script
   * @param attributes  object with class and unique id to save de script
   */
  insertSchema(schema: Record<string, any>, attributes:{className:string, id:string|number}): void {
    const { id, className} = attributes
    this.removeElementHeadByClass(className)
    let scriptEle:HTMLScriptElement = this._document.createElement('script');
		scriptEle.setAttribute('class', className);
    scriptEle.setAttribute('id', String(id))
    scriptEle.setAttribute('type','application/ld+json')
		scriptEle.text = JSON.stringify(schema);
		this._document.head.appendChild(scriptEle);
	}

}
