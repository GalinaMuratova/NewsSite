import { promises as fs} from 'fs';
import { randomUUID } from "crypto";
import {News, NewsWithoutId} from "../types";

const pathName = './dbNews.json';

let data: News[] = [];

const fileDbNews = {
    async init () {
        try {
            const fileContents = await fs.readFile(pathName);
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            console.error(e);
            data = [];
        }
    },
    async getItems() {
        return data;
    },
    async addItem(item: NewsWithoutId) {
        const now = new Date();
        const createdAt: string = now.toISOString();
        const newsNew: News = {
            ...item,
            id: randomUUID(),
            date: createdAt,
        };
        console.log(newsNew);
        data.push(newsNew);
        await this.save();
    },
    async save() {
        await fs.writeFile(pathName, JSON.stringify(data));
    },
    async delete(id: string) {
        const indexToDelete = data.findIndex(item => item.id === id);
        if (indexToDelete !== -1) {
            data.splice(indexToDelete, 1);
            await this.save();
        }
    }
}

export default fileDbNews;