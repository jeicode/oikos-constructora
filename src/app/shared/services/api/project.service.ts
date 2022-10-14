import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

const { api_url: API_URL} = environment

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  currentPage : any;

  constructor(private _http: HttpClient) {}

  async getCitiesByProjectType(project_type:string):Promise<any>{
    const url = `${API_URL}v1/getCitiesByProjectType?project_type=${project_type}`;
    return firstValueFrom(this._http.get(url)).then().catch(err => {
      console.warn(err)
      return false
    });
  }

  /**
   * @returns Promise<any>
   */
  async getHousingTypesByType(project_type:string):Promise<any>{
    const url = `${API_URL}v1/getHousingTypesByType?project_type=${project_type}`;
    return firstValueFrom(this._http.get(url)).then().catch(err => {
      console.warn(err)
      return false
    });
  }
  

  /**
   * @returns Promise<any>
   */
  async getFeaturedProjects():Promise<any>{
    const url = `${API_URL}v1/getProyectosDestacados`;
    return firstValueFrom(this._http.get(url)).then().catch(err => {
      console.warn(err)
      return false
    });
  }


  /**
   * 
   * @param tipo 
   * @param ciudad
   * @param tipo_proyecto
   * @param precio
   * @param limite
   * @returns Promise<any>
   */
  async getProyectosByTipo(tipo: string, ciudad?: string, tipo_proyecto?: string, precio?: string, limite?: any):Promise<any>{
    const url = `${API_URL}v1/getProyectosByTipo?tipo=${tipo}&ciudad=${ciudad}&tipo_proyecto=${tipo_proyecto}&precio=${precio}&limite=${limite}`;
    return this._http.get(url).toPromise().then().catch(err => {
      console.warn(err)
      return false
    });
  }

  /**
   * 
   * @param tipo 
   * @returns Promise<any>
   */
  async getProyectoByUrl(slug: any):Promise<any>{
    const url = `${API_URL}v1/getProyectoByUrl?friendly_url=${slug}`;
    return this._http.get(url).toPromise().then().catch(err => {
      console.warn(err)
      return false
    });
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
  async getCalculoPorcentaje(valorProyecto: any, porcentaje: any, cuotasinicialfinanciar: any, plazo: any, valorafinanciaranios: any):Promise<any>{
    const url = `${API_URL}v1/getCalculoPorcentaje?valorProyecto=${valorProyecto}&porcentaje=${porcentaje}&cuotasinicialfinanciar=${cuotasinicialfinanciar}&plazo=${plazo}&valorafinanciaranios=${valorafinanciaranios}`;
    return this._http.get(url).toPromise().then().catch(err => {
      console.warn(err)
      return false
    });
  }

  /**
   * 
   * @param saldocuota 
   * @param numerocuota 
   * @returns Promise<any>
   */
  async getCalculoCuota(saldocuota: any, numerocuota: any):Promise<any>{
    const url = `${API_URL}v1/getCalculoCuota?cuota=${numerocuota}&saldocuotainicial=${saldocuota}`;
    return this._http.get(url).toPromise().then().catch(err => {
      console.warn(err)
      return false
    });
  }

  /**
   * 
   * @param cuota 
   * @param valorafinanciar 
   * @param porcentajeefectivoanual 
   * @returns Promise<any>
   */
  async getPlazoanios(cuota: any, valorafinanciar: any):Promise<any>{
    const url = `${API_URL}v1/getPlazoanios?cuota=${cuota}&valorafinanciar=${valorafinanciar}`;
    return this._http.get(url).toPromise().then().catch(err => {
      console.warn(err)
      return false
    });
  }

  /**
   * 
   * @param data 
   * @returns Promise<any>
   */
   setCalculadoraForm(data: any): Promise<any> {
    const url = `${API_URL}v1/setCalculadoraForm`;
    return this._http.post(url, JSON.stringify(data)).toPromise().then().catch(err => {
      console.warn(err)
      return false
    });
  }

  /**
   * 
   * @param id_proyecto 
   * @returns Promise<any>
   */
  async getCategoriasInteres(id_proyecto: string): Promise<any> {
    const url = `${API_URL}v1/getCategoriasInteres?id_proyecto=${id_proyecto}`;
    return this._http.get(url).toPromise().then().catch(err => {
      console.warn(err)
      return false
    })
  }

  /**
   * 
   * @param id_categoria 
   * @param id_proyecto 
   * @returns Promise<any>
   */
  async getSitiosInteres(id_categoria: string, id_proyecto: string): Promise<any>{
    const url = `${API_URL}v1/getSitiosInteres?id_proyecto=${id_proyecto}&id_categoria=${id_categoria}`;
    return this._http.get(url).toPromise().then().catch(err => {
      console.warn(err)
      return false
    })
  }

  async getSeoContentProject(slug: string): Promise<any>{
    const url = `${API_URL}v1/getSeoContentProject?friendly_url=${slug}`;
    return this._http.get(url).toPromise().then().catch(err => {
      console.warn(err)
      return false
    })
  }

  async getPreciosProyectos(tipo: string): Promise<any>{
    const url = `${API_URL}v1/getPreciosProyectos?tipo=${tipo}`;
    return this._http.get(url).toPromise().then()
  }


  async createContactWppProject(data:any): Promise<any>{
    const url = `${API_URL}v1/createContactWppProject`;
    return this._http.post(url, data).toPromise().then()
  }



}