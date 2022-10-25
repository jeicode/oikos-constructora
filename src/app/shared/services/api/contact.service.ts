import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  nameContact:string = ""

  constructor(private _http: HttpClient) { }


  async postContactForm(data:any):Promise<any>{
    const url = `${BASE_URL}api/v1/setContactForm`; 
    return firstValueFrom(this._http.post(url, data)).then()
      .catch(err => {
        console.warn(err)
        return false
      })
  }

}
