import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[defaultImg]',
  standalone: true
})
export class DefaultImgDirective{

  @Input() defaultLink:string = 'https://www.oikos.com.co/constructora/images/website/Image_not_available.png';

  constructor(private elementRef: ElementRef) { }

  @HostListener('error')
  loadDefaultImage(){
    const image:HTMLImageElement = this.elementRef.nativeElement
    if(image.src === this.defaultLink){
      console.error(`La imagen por default ${this.defaultLink} está rota, por favor asigna una url válida`)
    } else {
      image.src = this.defaultLink;
    }
  }

}
