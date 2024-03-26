import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";

const { api_url: API_URL } = environment



export const getProyectosByTipo = () => {
    const _http = inject(HttpClient)
    return async (tipo: string, ciudad?: string, tipo_proyecto?: string, anio?: string, limite?: any, section?: any, order?: any): Promise<any> => {
        const url = `${API_URL}v1/getProyectosByTipo?tipo=${tipo}&ciudad=${ciudad}&tipo_proyecto=${tipo_proyecto}&precio=${anio}&limite=${limite}&section=${section}&order=${order}`;
        return firstValueFrom(_http.get(url)).then().catch(err => {
            console.warn(err)
            return []
        });
    }
}