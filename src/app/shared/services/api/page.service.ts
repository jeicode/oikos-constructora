import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

const { api_url: API_URL} = environment
declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private _http = inject(HttpClient)
  currentPage : any;
  

  /**
   * 
   * @param friendlyUrl 
   * @returns Promise<any>
   */
  async getSeoContentPage(friendlyUrl: string): Promise<any> {
    const url = `${API_URL}v1/getSeoContent`;
    const values = { friendlyUrl }
    return firstValueFrom( this._http.post(url, values)).catch(err => {
        console.warn(err)
        return null
      })
  }


  /**
   * 
   * @param friendlyUrl 
   * @returns 
   */
  async getContentPage(friendlyUrl: any): Promise<any> {
    const url = `${API_URL}v1/getContentPage`;
    const values = {
      friendlyUrl
    }

    return firstValueFrom(this._http.post(url, values)).catch(err => {
        console.warn(err)
        return false
      })
  }


  /**
   * 
   * @param friendlyUrl slug page
   * @returns Promise<any>
   */
  async getImagesBySlugPage(friendlyUrl: any): Promise<any> {
    const url = `${API_URL}v1/getImagenesByIdPage`;
    const values = {
      friendlyUrl
    }

    return firstValueFrom(this._http.post(url, JSON.stringify(values))).catch(err => {
        console.warn(err)
        return false
      })
  }

  /**
   * 
   * @param name 
   * @param content 
   * @returns any[] || boolean:false
   */

  async getBannersHome(name: string, content: string): Promise<any> {
    const url = `${API_URL}v1/getBannersHome?name=${name}&content=${content}`;
    return firstValueFrom(this._http.get(url)).then()
      .catch(err => {
        console.error(err)
        return []
      })
  }


  /**
   * 
   * @param name 
   * @param content 
   * @param condicional 
   * @param children 
   * @param excluir 
   * @param destacado 
   * @returns 
   */

  async getElementsContent(name: string, content: string, condicional?: string, children?: any, excluir?: string, destacado?: string): Promise<any> {
    const url = `${API_URL}v1/getElementsContent`;
    const values = {
      name,
      content,
      condicional,
      children,
      excluir,
      destacado
    }

    return firstValueFrom(this._http.post(url, values))
      .catch(err => {
        console.warn(err)
        return []
      })
  }


  /**
   * 
   * @param friendlyUrl slug page
   * @returns Promise<any>
   */
  async getPageContent(slug: any): Promise<any> {
    const url = `${API_URL}v1/getPageContent?friendly_url=${slug}`;

    return firstValueFrom(this._http.get(url))
      .catch(err => {
        console.warn(err)
        return false
      })
  }

  /**
   * 
   * @param agrupar 
   * @returns Promise<any>
   */

  async getEncuestaActiva(agrupar: any): Promise<any>{
    const url = `${API_URL}v1/getEncuestaActiva?agrupar=${agrupar}`;

    return firstValueFrom(this._http.get(url))
      .catch(err => {
        console.warn(err)
        return false
      })
  }

  /**
   * 
   * @param data 
   * @returns Promise<any>
   */

  async setRespuestaEncuesta(data: any, token: any): Promise<any>{
    const url = `${API_URL}v1/setRespuestaEncuesta`;
    const values = {
      data,
      token
    }

    return firstValueFrom(this._http.post(url, JSON.stringify(values))).catch(err => {
        console.warn(err)
        return false
      })
  }


  /**
   * 
   * @param friendlyUrl slug page
   * @returns Promise<any>
   */
  async getBreadCrumb(slug: string){
    const url = `${API_URL}v1/getBreadCrumb?url=${slug}`;
    return firstValueFrom(this._http.get(url));
  }


  closeNav(){
    if($(".btn_menu_movil").hasClass('active')){
      $(".btn_menu_movil").click();
    }
  }

}
