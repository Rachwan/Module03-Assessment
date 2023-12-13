import express from 'express';
import { connect } from './config/dbconnection.js';
import dotenv from "dotenv";
import articleRoutes from './Routes/ArticleRoutes.js';

const app =express();
const PORT = process.env.PORT;
dotenv.config();


app.use('/articles', articleRoutes);
app.use(express.json());

app.listen(PORT, () => {
  setTimeout(() => { connect() }, 7000);
  console.log(`server is running on ${PORT}`);
});