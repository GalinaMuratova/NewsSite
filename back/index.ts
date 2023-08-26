import express from "express";
import cors from 'cors';
import newsRouter from "./routers/news";
import fileDbNews from "./fileDb/fileDbNews";


const app= express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use('/news', newsRouter);

const run = async ()=> {
    await fileDbNews.init();
    app.listen(port, () => {
        console.log(`Server started on ${port} port`)
    });
};

run().catch(e => console.error(e));