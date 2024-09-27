import express, {Request,Response} from "express";
import dotenv from 'dotenv';
import { Sequelize } from "sequelize";



dotenv.config();

const application = express();
const port = process.env.PORT || 3000;


const sequelize : Sequelize = require('../Data_access_layer/database');
import UserDAO from "../Data_access_layer/DAO/UserDAO";
import { GetCurrentUser, GetUserID, Login, Logout } from "./AuthenticationHandler";
import { UserDataValues } from "../Data_access_layer/models/ModelTypes";
import { CreateUser, DeleteUser, GetAllUsers, UpdateUser } from "./UserHandler";
import { CompleteTask, CreateTask, DeleteTask, GetAllTasks, GetTaskByID, GetUserTasks, UpdateTask } from "./TaskHandler";



sequelize.sync().then(async () =>{

    if((await UserDAO.getUserById(-1)) == null){
        let adminUser : UserDataValues = {
            user_ID : -1,
            email : "admin",
            name : "admin",
            password : "",
            admin : true
        }
        UserDAO.createUser(adminUser);
    }



    application.use(express.json());

    application.get("/userID",GetUserID)

    application.post("/login",Login);

    application.post("/logout",Logout);

    application.get("/currentUser",GetCurrentUser);



    application.put("/createUser",CreateUser);

    application.post("/updateUser",UpdateUser);

    application.delete("/deleteUser",DeleteUser);

    application.get("/getAllUsers",GetAllUsers);



    application.put("/createTask",CreateTask);

    application.post("/updateTask",UpdateTask);

    application.delete("/deleteTask",DeleteTask);

    application.get("/getAllTasks",GetAllTasks);

    application.get("/getUserTasks", GetUserTasks);

    application.get("/getTaskByID",GetTaskByID);

    application.post("/completeTask",CompleteTask);

    
    
    application.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
})


