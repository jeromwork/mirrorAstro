import type IPageInfo from './IPageInfo';

interface NearestClinicsRoutsInfo {
    id: number;
    clinic_id: number;
    place_id: number;
    distance_car: number;
    duration_car: number;
    distance_walk: number;
    duration_walk: number;
}

interface Breadcrumb {
    title: string;
    url: string;
}
export default interface IPageInfoResponse {
    data: {
        resource: IPageInfo
        currentClinicId?:number,
        clinicUrl?:string,
        nearestClinicsRoutsInfo?:NearestClinicsRoutsInfo[],

    };
    sessionId?: string;
    redirectUrl?: string;
    code?: number;
    message?: string;
}
