import type ContentInterface from '../ContentInterface';
import type IReviewDoctor from './IReviewDoctor';
import type IReviewMessage from './IReviewMessage';
export default interface IReview {
    id: number;
    patient?: string;
    author?: string;

    body?: string;
    text?: string;

    posle?: number;
    nomer?: number;
    otvet_legacy?: string;
    otvet_date_legacy?: string;
    published_at?: string;

    ozenka?: number;
    rating?: number;
    rating5?: number;
    likes?: number;

    source?:string;

    content?:ContentInterface[];
    messages?:IReviewMessage[]
    targets?:IReviewDoctor[]|null
}
