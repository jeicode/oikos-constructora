import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe',
  standalone: true
})
export class SafePipe implements PipeTransform {


  constructor(private _sanitizer: DomSanitizer){}
  
  transform(value: string = "", type: 'url' | 'html' | undefined): SafeResourceUrl | SafeHtml {
    if (type == 'html') return this._sanitizer.bypassSecurityTrustHtml(value)
    return this._sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
