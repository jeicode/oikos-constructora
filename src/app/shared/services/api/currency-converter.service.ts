import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Project } from 'src/app/core/models/project.model';
import { environment } from 'src/environments/environment.prod';
import { ConfigService } from '../functions/config.service';

const BASE_URL = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  currentCopPrice!:number;
  configService = inject(ConfigService)
  constructor(private _http:HttpClient) { }

  async getContentHtmlExternalPage(urlPage:string):Promise<any>{ 
    const url = `${BASE_URL}api/v1/getContentHtmlExternalPage?urlPage=${urlPage}`; 
    return firstValueFrom(this._http.get(url)).then()
      .catch(err => {
        console.warn(err)
        return false
      })
  }

  /**
   * 
   * @returns Price Colombian pesos COP by usd
   */
  private async getCopPriceByUsd():Promise<number | null>{

    if (this.configService.isBrowser()){
      const urlPage = 'https://www.google.com/finance/quote/USD-COP?sa=X&ved=2ahUKEwiBpd_lo5L7AhV1VTABHSOsBHgQmY0JegQIBhAc';
      const {html} = await this.getContentHtmlExternalPage(urlPage);
      
      if (html){
        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(html, 'text/html');
        if (htmlDoc){
          let copPrice = htmlDoc.querySelector('.fxKbKc')?.textContent;
          if (copPrice){
            const price = copPrice.replace(/,/g, '');
            return Number(price);
          }
  
        }
      }
    }

    return null;
  }


  async convertCopToUsdProjects(projects:Project[]):Promise<Project[] | null>{
    const priceCop = await this.getCopPriceByUsd()

    if (priceCop && projects?.length > 0){
      if (projects.length > 0){
        return projects.map( (p) => {
          if (p?.valor_proyecto){
            p.dollar_value = Number(p?.valor_proyecto)/priceCop
            p.dollar_value = Math.trunc(p.dollar_value); // remove decimals
          }
          return p;
        })
      }
    }

    return null

  }

}
