import type IReviewLink from './IReviewLink';

export default interface IReviewDoctor {
  id: number
  fullname: string
  type: string
  photo: string
  url: string
  out_links: IReviewLink[]
}
