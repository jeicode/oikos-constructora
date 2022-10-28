export interface Galeria {
    field_content: string;
    title: string;
    alt: string;
    field_description?: any;
}

export interface Zona {
    nombre: string;
    imagen: string;
    title: string;
    alt: string;
}


export class BannerHome {

    constructor(
        public id: string = "",
        public field_content: string = "",
        public id_parent: string = "",
        public metadescription: string = "",
        public imagen: string[] =[""],
        public imagen_title: string[] = [""],
        public imagen_alt: string[] = [""],
        public descripcion_banner_home: string = "",
        public texto_cta_banner: string = "",
        public link_cta_banner: string = "",
        public titulo_proyecto: string | undefined = "",
        public valor_proyecto: string | undefined = "",
        public logo_proyecto: string | undefined = "",
        public color_primario: string | undefined = "",
        public color_secundario: string | undefined = "",
        public estado_proyecto: string | undefined = "",
        public beneficios_proyecto:string = "",
        public galeria: Galeria[] = [],
        public zonas: Zona[] | undefined = [],
    ) { }

}
