import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SeoPage } from 'src/app/core/models/seo-page.model';

const { api_url: API_URL} = environment

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  currentPage : any;

  constructor(private _http: HttpClient) {}
  

  /**
   * 
   * @param tipo 
   * @returns Promise<any>
   */
   async getProyectosByTipo(tipo: string){
    const url = `${API_URL}v1/getProyectosByTipo?tipo=${tipo}`;
    return this._http.get(url).toPromise().then();
  }

  /**
   * 
   * @param tipo 
   * @returns Promise<any>
   */
   async getProyectoByUrl(slug: any){
    const url = `${API_URL}v1/getProyectoByUrl?friendly_url=${slug}`;
    return this._http.get(url).toPromise().then();
  }

}