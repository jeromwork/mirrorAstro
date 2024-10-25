export default interface IPriceServicesItem {
    id:number,
    title:string
    url?:string
    min_price?:number
    service_option?:string
    children?:IPriceServicesItem[]
}
