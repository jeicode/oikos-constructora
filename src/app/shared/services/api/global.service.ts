import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const { api_url: API_URL} = environment

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  configInfo = new EventEmitter<any>();

  constructor(private _http: HttpClient) {
    // this.getConfigInfo();
  }
  
  
  async getSocialNetwork(): Promise<any> {
    const url = `${API_URL}v1/getSocialNetwork`;

    return this._http.get(url).toPromise().then()
      .catch(err => {
        console.warn(err)
        return false
      })
  }

  async getConfigInfo(): Promise<any> {
    const url = `${API_URL}v1/getConfigInfo`;

    const data = await this._http.get(url).toPromise().then()
      .catch(err => {
        console.warn(err)
        return false
      })

    setTimeout(() => {
      this.configInfo.emit(data);
    },1000)

  }

  async getDepartaments(): Promise<any> {
    const url = `${API_URL}v1/getDepartamentos`;

    return this._http.get(url).toPromise().then()
      .catch(err => {
        console.warn(err)
        return false
      })
  }

  async getCities(valueDep: string): Promise<any> {
    const url = `${API_URL}v1/getCiudades`;
    const values = {
      departamento: valueDep
    }

    return this._http.post(url, JSON.stringify(values)).toPromise().then()
      .catch(err => {
        console.warn(err)
        return false
      })
  }

  async setContactForm(data: any): Promise<any> {
    const url = `${API_URL}v1/setContactForm`;
    return this._http.post(url, JSON.stringify(data)).toPromise().then();
  }

  async setContactPQRS(data: any): Promise<any> {
    const url = `${API_URL}v1/setContactPQRS`;
    return this._http.post(url, JSON.stringify(data)).toPromise().then();
  }

  async setSedeForm(data: any): Promise<any> {
    const url = `${API_URL}v1/setSedeForm`;
    return this._http.post(url, JSON.stringify(data)).toPromise().then();
  }

  async setAutoForm(data: any): Promise<any> {
    const url = `${API_URL}v1/setAutoForm`;
    return this._http.post(url, JSON.stringify(data)).toPromise().then();
  }

  async setMinibodegasForm(data: any): Promise<any> {
    const url = `${API_URL}v1/setMinibodegasForm`;
    return this._http.post(url, JSON.stringify(data)).toPromise().then();
  }

  async setCotizador(data: any): Promise<any> {
    const url = `${API_URL}v1/setCotizador`;
    return this._http.post(url, JSON.stringify(data)).toPromise().then();
  }

  async getMenu(): Promise<any> {
    const url = `${API_URL}v1/getMenu`;
    return this._http.get(url).toPromise().then();
  }

}
