import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
const { api_url: API_URL, token_email } = environment

type PSendMailApiError = {
  api: string,
  errors?: {}
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  constructor(private _http: HttpClient) {
  }


  async sendMailApiError(data: PSendMailApiError) {
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': token_email
    };

    const url = 'https://mail.paxzu.com/api/v1/setInfoEmail';
    const values = {
      email: 'jeison.obando@paxzu.co,david@paxzu.co,eliecer.vasquez@paxzu.co',
      subject: `Error al enviar Lead | ${data.api}, OIKOS constructora`,
      template: {
        name: 'templateApiError',
        data
      },
      setFrom: 'corporativo@oikos.com.co'
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      let data = await response.json();

      if (data?.status !== '200') {
        alert('No se logró enviar lead - setInfoEmail')
      }
      else {
        return data;

      }
    } catch (error) {
      console.error('There was an error with your fetch operation:', error);
      return false;
    }

  }


  async getSocialNetwork(): Promise<any> {
    const url = `${API_URL}v1/getSocialNetwork`;

    return this._http.get(url).toPromise().then()
      .catch(err => {
        console.error(err)
        return []
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
    return firstValueFrom(this._http.get(url)).catch(err => {
      console.error(err)
      return []
    });
  }

}
