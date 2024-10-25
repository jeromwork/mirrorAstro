export default interface IPageInfoRequest {
    component : string;
    action : string;
    resourceUrl : string;
    previousUrl ?: string;
    startSession ?: boolean;

}
