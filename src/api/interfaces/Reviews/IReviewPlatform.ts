import type { TPlatform } from './TPlatform';
export default interface IReviewPlatform {
    source ?:TPlatform;
    count?: number;
    rating?: number;
}
