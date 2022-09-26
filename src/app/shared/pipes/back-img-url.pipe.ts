import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backImgUrl',
  standalone: true
})
export class BackImgUrlPipe implements PipeTransform {

  transform(url: string = "", url2: string = '', extra_styles: string = ""): string {
    if ( url ) {
      if (url2){
        return `url(${url}), url(${url2})  ${extra_styles}`

      } else{
        return `url(${url}) ${extra_styles}`
      }
    }
    return ""
  }

}
