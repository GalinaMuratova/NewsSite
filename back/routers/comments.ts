import express from 'express';
import {CommentWithoutId} from "../types";
import fileDbComments from "../fileDb/fileDbComments";
import fileDbNews from "../fileDb/fileDbNews";
const commentsRouter = express.Router();

commentsRouter.get('/', async (req, res)=> {
    const comments = await fileDbComments.getItems();
    res.send(comments);
});

commentsRouter.get('/:id', async (req, res)=> {
    const comments = await fileDbComments.getItems();
    const comment = comments.find(item => item.id === req.params.id);
    if (!comment) {
        res.sendStatus(404);
        return;
    }
    res.send(comment);
});

commentsRouter.post('/', async (req, res)=> {
    if (!req.body.text) {
        res.status(400).send({"error": "Field text area"});
    }

    const usedCategory = await fileDbNews.getItems();
    const categoryExists = usedCategory.find(item => item.id === req.body.idNews);
    if (!categoryExists) {
        res.status(400).send({ "error": "News does not exist" });
        return;
    }

    const comment: CommentWithoutId = {
        idNews: req.body.idNews,
        text:req.body.text,
        author:req.body.author
    };
    const saveComment = await fileDbComments.addItem(comment);
    res.send(saveComment);
});

commentsRouter.delete('/:id', async (req, res)=> {
    const comments = await fileDbComments.getItems();
    const comment = comments.find(item => item.id === req.params.id);

    if (!comment) {
        res.sendStatus(404);
        return;
    }
    await fileDbComments.delete(req.params.id);
    res.send('Deleted');
});

export default commentsRouter;