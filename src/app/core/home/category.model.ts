import { Product } from './product.model';

export interface Category {
  id: number;
  title: string;
  parentId: number;
  imgPath?: string;
  children?: Category[];
  products?: Product[];
}

export interface AdminCategory extends Category {
  children?: AdminCategory[];
  categoryProvider: CategoryProvider[];
}

export interface CategoryProvider {
  provider: Provider;
  categoryProviderId: number;
  descriptonCategoryProvider: number;
}

export interface Provider {
  id: number;
  description: string;
}
