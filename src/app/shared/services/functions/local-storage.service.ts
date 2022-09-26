import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  infoIsLoaded: boolean = false
  isBrowser:boolean  = false;

  constructor() {}

    /**
   * 
   * @param name name item
   * @returns boolean
   */
  existItemInLocalStg = (name:string)  => {
    let exist = localStorage.getItem(name) || null
    if (exist && exist !== 'undefined'){

        try {
            return JSON.parse(exist)
        } catch (error) {
            return exist
        }
    }
    return null
  }


  /**
  * 
  * @param name name item
  * @returns boolean
  */
  removeItemsLocalStg = (names:string[]) => {
    return new Promise( resolve => {
        for (let i = 0; i < names.length; i++) {
            localStorage.removeItem(names[i]) 
        }
        resolve(true)
    })
  }

}
