export interface News {
    id: string;
    title:string;
    description:string;
    image:string|null
    date: string;
}
export interface NewsWithoutId {
    title:string;
    description:string;
    image:string|null
}
 export interface Comment {
    id: string;
    idNews: string;
    author: string;
    text:string
 }

export interface CommentWithoutId {
    idNews: string;
    author: string;
    text:string
}