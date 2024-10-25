export default interface ServiceData {
    id: string;
    serviceId: number;
    name: string;
    variationId: number;
    variationName: string;
    price: number;
    custom_price: number;
    default_option: string;
    option: string;
    discount?: number;
    favorite?:boolean;
    selected?:boolean;
    seoName?:string;
    serviceTitle?:string;
    specialityTitle?:string;
    weight?:number;
}
