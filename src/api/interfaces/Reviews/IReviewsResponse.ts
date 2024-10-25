import type IResponse from '../IResponse';
import type IReview from './IReview';
import type IReviewPlatform from './IReviewPlatform';

export default interface IReviewsResponse extends IResponse {
    items: IReview[];
    countAllPlatforms?: number;
    totalRating?:number,
    platforms?:IReviewPlatform[],
    per_page: number,
    total_pages: number
    totalCount: number
}
