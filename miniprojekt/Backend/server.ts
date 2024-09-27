import express, {Request,Response} from "express";
import dotenv from 'dotenv';

dotenv.config();

const application = express();
const port = process.env.PORT || 3000;



application.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})