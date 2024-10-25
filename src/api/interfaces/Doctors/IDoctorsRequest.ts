export default interface IDoctorsRequest {
    component ?: string;
    action ?: string;
    url? : string;
    page ?: number;
    perPage ?: number;
    sortBy ?: string;
    existIds ?: string;
    withSlots?: boolean;
    withSlots30Days?: boolean;
}
