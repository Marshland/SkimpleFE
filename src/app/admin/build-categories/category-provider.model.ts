export interface Provider {
  id: number;
  name: string;
}

export interface CategoryProvider {
  id: number;
  provider: Provider;
  providerCategoryId: string;
  providerCategoryDesc: string;
}
