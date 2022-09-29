import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Blog } from 'src/app/core/models/blog.model';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  currentBlogs:Blog[] = []
  currentNumPage:number = 1;
  remainingPages:number = 0;

  activeBlog:Blog = new Blog()

  constructor(private _http: HttpClient) { }

  async getMainNew():Promise<any>{
    const url = `${BASE_URL}api/v1/getMainNews`; 
    return firstValueFrom(this._http.get(url)).then()
      .catch(err => {
        console.warn(err)
        return false
      })
  }


  async getSecondMainNews():Promise<any>{
    const url = `${BASE_URL}api/v1/getMain3News`; 
    return firstValueFrom(this._http.get(url)).then()
      .catch(err => {
        console.warn(err)
        return false
      })
  }

  async getMostRecentNews(query:string):Promise<any>{
    const url = `${BASE_URL}api/v1/getNewsPages${query}`; 
    return firstValueFrom(this._http.get(url)).then()
      .catch(err => {
        console.warn(err)
        return false
      })
  }

  async getInterestNews():Promise<any>{
    const url = `${BASE_URL}api/v1/getInterestNews`; 
    return firstValueFrom(this._http.get(url)).then()
      .catch(err => {
        console.warn(err)
        return false
      })
  }


  async getDetailNewBySlug(slug:string):Promise<any>{
    const url = `${BASE_URL}api/v1/getDetailNews?slug=${slug}`; 
    return firstValueFrom(this._http.get(url)).then()
      .catch(err => {
        console.warn(err)
        return false
      })

  }

}
