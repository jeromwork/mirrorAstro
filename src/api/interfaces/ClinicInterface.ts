import type ContentInterface from './ContentInterface';

export default interface ClinicInterface {
    id: number;
    iid: number;
    url: string;
    contact_url: string;
    node_address: string;
    full_name: string;
    address?: string | null;
    way_time?: string | null;
    way?: number | null;
    lat?: number | null;
    lon?: number | null;
    ymap?: string | null;
    east_clinic: number;
    telemed: number;
    node_color?: string | null;
    off?: number;
    city_location?: string | null;
    company_name?: string | null;
    parent_clinic_id?: number;
    photos?: ContentInterface[] |{[index: string]:ContentInterface} | null;
    way_photos?: ContentInterface[] | null;
    awards?: any[] | null; // Change 'any' to a more specific type if you have a known structure for these JSON fields
    info_block?: any[] | null; // Change 'any' to a more specific type if you have a known structure for these JSON fields
    reviewsCache?: any[] | null; // Change 'any' to a more specific type if you have a known structure for these JSON fields
    content?: ContentInterface[] | null;
    description?: string | null;
    is_partner_clinic?: number;
    resid?:number;

    clinic_parking?: string | null;
    clinic_hours?: string | null;
    clinic_pandus?: string | null;
    google_link?: string | null;

}
