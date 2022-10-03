import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SeoPage } from 'src/app/core/models/seo-page.model';
import { firstValueFrom } from 'rxjs';

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
   * @param ciudad
   * @param tipo_proyecto
   * @returns Promise<any>
   */
  async getProyectosByTipo(tipo: string, ciudad?: string, tipo_proyecto?: string):Promise<any>{
    const url = `${API_URL}v1/getProyectosByTipo?tipo=${tipo}&ciudad=${ciudad}&tipo_proyecto=${tipo_proyecto}`;
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

  /**
   * 
   * @param valorProyecto
   * @param porcentaje
   * @param cuotasinicialfinanciar
   * @param plazo
   * @param valorafinanciaranios
   * @returns Promise<any>
   */
  async getCalculoPorcentaje(valorProyecto: any, porcentaje: any, cuotasinicialfinanciar: any, plazo: any, valorafinanciaranios: any){
    const url = `${API_URL}v1/getCalculoPorcentaje?valorProyecto=${valorProyecto}&porcentaje=${porcentaje}&cuotasinicialfinanciar=${cuotasinicialfinanciar}&plazo=${plazo}&valorafinanciaranios=${valorafinanciaranios}`;
    return this._http.get(url).toPromise().then();
  }

  /**
   * 
   * @param saldocuota 
   * @param numerocuota 
   * @returns Promise<any>
   */
  async getCalculoCuota(saldocuota: any, numerocuota: any){
    const url = `${API_URL}v1/getCalculoCuota?cuota=${numerocuota}&saldocuotainicial=${saldocuota}`;
    return this._http.get(url).toPromise().then();
  }

  /**
   * 
   * @param cuota 
   * @param valorafinanciar 
   * @param porcentajeefectivoanual 
   * @returns Promise<any>
   */
  async getPlazoanios(cuota: any, valorafinanciar: any){
    const url = `${API_URL}v1/getPlazoanios?cuota=${cuota}&valorafinanciar=${valorafinanciar}`;
    return this._http.get(url).toPromise().then();
  }

  /**
   * 
   * @param data 
   * @returns Promise<any>
   */
   setCalculadoraForm(data: any): Promise<any> {
    const url = `${API_URL}v1/setCalculadoraForm`;
    return this._http.post(url, JSON.stringify(data)).toPromise().then();
  }
}