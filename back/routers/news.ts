import express from 'express';
import fileDbNews from "../fileDb/fileDbNews";
import {NewsWithoutId} from "../types";
import {imagesUpload} from "../multer";
import fileDbComments from "../fileDb/fileDbComments";
const newsRouter = express.Router();

newsRouter.get('/', async (req, res)=> {
    const news = await fileDbNews.getItems();
    res.send(news);
});

newsRouter.get('/:id', async (req, res)=> {
    const news = await fileDbNews.getItems();
    const oneNews = news.find(item => item.id === req.params.id);

    if (!oneNews) {
        res.sendStatus(404);
        return;
    }
    res.send(oneNews);
});

newsRouter.post('/', imagesUpload.single('image'),async (req, res)=> {
    if (!req.body.title) {
        res.status(400).send({"error": "Field title"})
    } else if (!req.body.description) {
        res.status(400).send({"error": "Field description"})
    }

    const oneNews: NewsWithoutId = {
        title: req.body.title,
        description:req.body.description,
        image: req.file ? 'images/' + req.file.filename : null
    };
    const saveNews = await fileDbNews.addItem(oneNews);
    res.send(saveNews);
});

newsRouter.delete('/:id', async (req, res)=> {
    const news = await fileDbNews.getItems();
    const oneNews = news.find(item => item.id === req.params.id);

    const comments = await fileDbComments.getItems();

    const commentsWithSameId = comments.filter(item => item.idNews === req.params.id);

    for (const comment of commentsWithSameId) {
        await fileDbComments.delete(comment.id);
    }
    if (!oneNews) {
        res.sendStatus(404);
        return;
    }
    await fileDbNews.delete(req.params.id);
    res.send('Deleted');
});

export default newsRouter;
