import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandNumber', standalone:true
})
export class ThousandNumber implements PipeTransform {

  transform(value: any, format:'es' | 'en' = 'es'):string {   

    if (typeof value == 'string'){
      value = value.replace(/[.,\s]/g, '')

      if(/^\d+$/.test(value)){ // check if is valid number
        let number = BigInt(value)
        return this.getFormatEnNumber(number, format);
      } 
      
    } else if (typeof value == 'number'){
      return this.getFormatEnNumber(value, format);
    }
    return "";      
  }


  /**
   * 
   * @param value number to format
   * @param format 'es' or 'en'
   * @returns number formated
   */
  getFormatEnNumber(value:number | bigint, format:string):string {
    const nf = new Intl.NumberFormat(format); // en or es
    return  nf.format(value);
  }



}
