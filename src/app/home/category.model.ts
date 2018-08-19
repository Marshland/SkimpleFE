import { Product } from './product.model';

export interface Category {
  title: string;
  imgPath?: string;
  link?: string;
  children?: Category[];
  products?: Product[];
}
