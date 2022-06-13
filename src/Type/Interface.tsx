export interface ImageType {
  id: number;
  image: string;
  description: string;
}

export interface CommentsType {
  id: number;
  name: string;
  comments: string;
}

export interface IgetData {
  url: string;
}

export interface IResponse {
  id: number;
  image: string;
  description: string;
  // first_name: string;
  // last_name: string;
  // email: string;
  // gender: string;
}
