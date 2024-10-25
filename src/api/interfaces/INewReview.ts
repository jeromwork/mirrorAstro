import type ContentInterface from './ContentInterface';

type TMessage = {
    id: number;
    message: string;
};

export default interface INewReview {

    fio: string;
    phone: string;

    reviewable_type: string;
    reviewable_id: number;
    rating: number; // in percent 1 to 100

    text?: string;
    content?:ContentInterface[];
}
