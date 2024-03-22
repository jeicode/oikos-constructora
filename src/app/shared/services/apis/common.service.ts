import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { BannerHome } from "src/app/core/models/banner-home.model";
import { environment } from "src/environments/environment"
const { api_url: API_URL } = environment


interface ElementContent {
    name: string;
    content?: string;
    condicional?: string;
    children?: any;
    excluir?: string;
    destacado?: string;
}
export const getElementsContent = () => {
    const _http = inject(HttpClient)
    return async({
        name,
        content,
        condicional,
        children,
        excluir,
        destacado
    }:ElementContent):Promise<any> => {
        const url = `${API_URL}v1/getElementsContent`;
        const values = {
            name,
            content,
            condicional,
            children,
            excluir,
            destacado
        }

        return firstValueFrom(_http.post(url, values))
            .catch(err => {
                console.warn(err)
                return []
            })
    }
}


interface BannerParams {
    name: string;
    content: string;
}
export const getBannersHome = (): Function => {
    const _http = inject(HttpClient)
    return async ({ name, content }: BannerParams): Promise<BannerHome[] | []> => {
        const url = `${API_URL}v1/getBannersHome?name=${name}&content=${content}`;
        return firstValueFrom(_http.get<any>(url))
            .catch(err => {
                console.error(err)
                return []
            })
    }
}