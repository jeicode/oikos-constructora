import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
const { api_url: API_URL } = environment


export const getPageContent = () => {
  const _http = inject(HttpClient)
  return async (slug:string): Promise<any> => {
    const url = `${API_URL}v1/getPageContent?friendly_url=${slug}`;
      return firstValueFrom(_http.get<any>(url))
          .catch(err => {
              console.error(err)
              return []
      })
  }
}