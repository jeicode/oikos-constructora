import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeHTML',
  standalone: true
})
export class HTMLPipe implements PipeTransform {


  constructor(private _sanitizer: DomSanitizer){}
  
  transform(value: string = ""): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
