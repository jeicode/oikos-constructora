import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const { api_url: API_URL} = environment

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  constructor(private _http: HttpClient) {
  }
  
  
  async getSocialNetwork(): Promise<any> {
    const url = `${API_URL}v1/getSocialNetwork`;

    return this._http.get(url).toPromise().then()
      .catch(err => {
        console.warn(err)
        return false
      })
  }

  async getConfigFooter(): Promise<any> {
    const url = `${API_URL}v1/getConfigInfo`;

    return this._http.get(url).toPromise().then()
      .catch(err => {
        console.warn(err)
        return false
      })

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

  async getMenuFooter(): Promise<any> {
    const url = `${API_URL}v1/getMenuFooter`;
    return this._http.get(url).toPromise().then();
  }

}
