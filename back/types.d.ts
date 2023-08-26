export interface News {
    title:string;
    description:string;
    image:string;
    date: string;
    id: string;
}
export interface NewsWithoutId {
    title:string;
    description:string;
    image:string
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