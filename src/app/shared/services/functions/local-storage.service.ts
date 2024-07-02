import { inject, Injectable } from '@angular/core';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  infoIsLoaded: boolean = false
  configService = inject(ConfigService)
  isBrowser: boolean = false;

  constructor() { }

  /**
 * 
 * @param name name item
 * @returns boolean
 */
  existItemInLocalStg = (name: string) => {
    if (this.configService.isBrowser()) {
      let exist = localStorage.getItem(name) || null
      if (exist && exist !== 'undefined') {

        try {
          return JSON.parse(exist)
        } catch (error) {
          return exist
        }
      }
      return null
    }
  }


  /**
  * 
  * @param name name item
  * @returns boolean
  */
  removeItemsLocalStg = (names: string[]) => {
    if (this.configService.isBrowser()) {
      return new Promise(resolve => {
        for (let i = 0; i < names.length; i++) {
          localStorage.removeItem(names[i])
        }
        resolve(true)
      })
    }

    return null
  }

}
