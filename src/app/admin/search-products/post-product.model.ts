export interface PostProductRequest {
  flgTest: boolean;
  socialId: number;
  post: PostProduct;
}

export interface PostProduct {
  text: string;
  hashtags: string[];
  url: string;
  image: string;
  linkSx: string;
  linkDx: string;
}
