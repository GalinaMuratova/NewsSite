import {promises as fs} from 'fs';
import { randomUUID } from "crypto";
import {Comment, CommentWithoutId} from "../types";

const pathName = './dbComments.json';

let data: Comment[] = [];

const fileDbComments = {
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
    async addItem(item: CommentWithoutId) {
        const newComment: Comment = {
            ...item,
            id: randomUUID()
        };
        data.push(newComment);
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

export default fileDbComments;