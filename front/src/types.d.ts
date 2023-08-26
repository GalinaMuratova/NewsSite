export interface News {
  title:string;
  description:string;
  image:string;
  date: string;
  id: string;
}

export interface NewsMutation {
  title:string;
  description:string;
  image:File | null;
}