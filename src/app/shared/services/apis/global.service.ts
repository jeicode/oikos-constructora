import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { IConfigFooter } from "src/app/core/interfaces/footer.interface";
import { environment } from "src/environments/environment";

const { api_url: API_URL} = environment


export const getSocialNetwork = () => {
  const _http = inject(HttpClient)

  return async (): Promise<any> => {
    const url = `${API_URL}v1/getSocialNetwork`;
    return _http.get(url).toPromise().catch( err => {
      return []
    })
  }
}

export const getConfigFooter = () => {
  const _http = inject(HttpClient)
  return async (): Promise<IConfigFooter> => {
    const url = `${API_URL}v1/getConfigInfo`;
    return _http.get<any>(url).toPromise().then()
      .catch(err => {
        console.warn(err)
        return null
      })
  }
}


export const getMenuFooter = () => {
  const _http = inject(HttpClient)
  return async():Promise<any> => {
    const url = `${API_URL}v1/getMenuFooter`;
    return firstValueFrom(_http.get(url)).catch(err => {
      console.error(err)
      return []
    });

  }
}





    


