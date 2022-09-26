export interface MetaTag{
    name:string
}

export interface Breadcrumb {
    title: string
    page?: Page
}

export class Page {

    constructor(
        public meta_robot: MetaTag ,
        public name?: string,
        public slug?: string,
        public title?: string,
        public meta_title: string = "",
        public meta_canonical_prod: string = "",
        public meta_canonical_test: string = "",
        public meta_canonical_dev: string = "",
        public meta_desc: string = "",
        public breadcrumbs: Breadcrumb[] = []
    ) { }

}
