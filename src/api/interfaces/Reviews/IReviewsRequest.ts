import type { TPlatform } from './TPlatform';
export default interface IReviewsRequest {
    page ?: number;
    reviewable_type : '*'|'doctor'|'clinic'|'service';
    reviewable_id ?: number|Array<number>;
    sortBy: string|null;
    platform: TPlatform|null;
}
