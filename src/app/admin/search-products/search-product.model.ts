export interface Provider {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  title: string;
  parentId?: number;
  imgPath?: string;
  children: Category[];
  categoriesProviders?: Provider;
}

export interface Multimedia {
  id: number;
  uri: string;
}

export interface AdminSearchProduct {
  id?: number;
  title: string;
  shortSummary?: string;
  summary?: string;
  price: number;
  offerPrice: number;
  ratio?: number;
  provider: Provider;
  url: string;
  createDate?: Date;
  updateDate?: Date;
  category: Category[];
  idExternalProduct: string;
  tag?: string;
  multimedia: Multimedia[];
  percentageSaved: number;
  isAvailable: boolean;
}
