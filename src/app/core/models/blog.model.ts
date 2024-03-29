import { Project } from "./project.model";

export class Blog {

    constructor(
        public id: string = "",
        public friendly_url: string = "",
        public date_format: string = "",
        public imagen: string = "",
        public imagen_alt: string = "",
        public imagen_title: string = "",
        public summary: string = "",
        public title: string = "",
        public title_new:string = "",
        public dynamic: string = "",
        public title_ant:string = "",
        public title_sig:string = "",
        public url_ant:string = "",
        public url_sig:string = "",
        public nombre_categoria:string = "",
        public color_categoria:string = "",
        public link_cta:string = "",
        public texto_cta:string = "",
        public proyecto: Project = new Project()
    ) { }

}
