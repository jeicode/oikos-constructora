import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[defaultImg]',
  standalone: true
})
export class DefaultImgDirective{

  deaultIsBroken:boolean = false;
  @Input() defaultLink:string = 'https://client-setting-co-institucional-images.s3.amazonaws.com/large_bayport_generica_blog_a0731c1dba.jpeg';;

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
