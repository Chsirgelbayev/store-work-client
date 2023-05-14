import { ICategory } from './category.interface';
import { IReview } from './review.interface';

export interface IProduct {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  reviews: IReview[];
  image: string;
  category: ICategory;
  createdAt: string;
  updatedAt: string;
}

export interface IProductDetaits {
  product: IProduct;
}
