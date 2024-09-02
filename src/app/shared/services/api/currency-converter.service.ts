import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ConfigService } from '../functions/config.service';

const BASE_URL = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  currentCopPrice!: number;
  configService = inject(ConfigService)
  constructor(private _http: HttpClient) { }

  async getContentHtmlExternalPage(urlPage: string): Promise<any> {
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
  private async getCopPriceByUsd(): Promise<number | null> {
    const res:any = await firstValueFrom( this._http.get('https://www.datos.gov.co/resource/32sa-8pi3.json?$limit=1'));
    if (res?.[0]) return Number(res?.[0].valor)
    return null
  }

  async convertCopToUsd(data: any): Promise<any> {
    const priceCop = await this.getCopPriceByUsd();
    if (priceCop) {
      return data.map((p: any) => {
        p.dollar_value = Number(p?.valor_proyecto) / priceCop
        p.dollar_value = Math.trunc(p.dollar_value); // remove decimals
        return p
      })
    }
  }

}
