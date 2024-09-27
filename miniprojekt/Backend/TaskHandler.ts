import {Request,Response} from "express";
import UserDAO from "../Data_access_layer/DAO/TaskDAO";
import { TaskDataValues } from "../Data_access_layer/models/ModelTypes";
import TaskDAO from "../Data_access_layer/DAO/TaskDAO";

export async function CreateTask(req:Request, res: Response) {
    const {name, description, deadline, assigned_user_ID} = req.body;

    if(name == null || name == ""){res.status(400).send("Task name is empty"); return;}
    if(deadline == null || deadline == ""){res.status(400).send("Deadline is empty"); return;}

    let task : TaskDataValues = {
        name : name,
        description : description || "",
        deadline : deadline,
        assigned_user_ID : assigned_user_ID || null,
    }

    let resultTask = await TaskDAO.createTask(task);

    if(resultTask != null){
        res.status(200).send("Successfully created task.");
    }
    else{
        res.status(400).send("Error during task creation");
    }

}

export async function DeleteTask(req:Request, res: Response) {
    const {taskID} = req.body;

    let result = TaskDAO.deleteTask(taskID);

    if(result != null){
        res.status(200).send("Successfully deleted task.");
    }
    else{
        res.status(400).send("Error during task deletion");
    }
}

export async function UpdateTask(req:Request, res: Response) {
    const {taskID,name, description, deadline, assigned_user_ID} = req.body;

    let task : TaskDataValues = (await TaskDAO.getTaskById(taskID))?.dataValues;

    if(task == null){res.status(400).send("Invalid task"); return;}

    if(name == null || name == ""){res.status(400).send("Task name is empty"); return;}
    if(deadline == null || deadline == ""){res.status(400).send("Deadline is empty"); return;}

    let newTask : TaskDataValues = {
        name : name || task.name,
        description : description || task.description,
        deadline : deadline || task.deadline,
        assigned_user_ID : assigned_user_ID || null,
    }

    let resultTask = await TaskDAO.createTask(newTask);

    if(resultTask != null){
        res.status(200).send("Successfully created task.");
    }
    else{
        res.status(400).send("Error during task creation");
    }
}

export async function GetAllTasks(req:Request, res: Response) {
    let result : TaskDataValues[] = (await TaskDAO.getAllTasks()).map(x => x.dataValues);

    res.status(200).json({
        tasks: result
    });
}

export async function GetUserTasks(req:Request, res: Response) {
    const {userID} = req.body;
    let result : TaskDataValues[] = (await TaskDAO.getTasksByUserId(userID)).map(x => x.dataValues);

    res.status(200).json({
        tasks: result
    });
}

export async function GetTaskByID(req:Request, res: Response) {
    const {taskID} = req.body;
    let result : TaskDataValues = (await TaskDAO.getTaskById(taskID))?.dataValues;

    if(result == null){res.status(400).send("Invalid Task id");}
    else{
        res.status(200).json({
            task: result
        }); 
    }
}

export async function CompleteTask(req:Request, res: Response) {
    const {taskID} = req.body;
    let task : TaskDataValues = (await TaskDAO.getTaskById(taskID))?.dataValues;

    if(task == null){res.status(400).send("Invalid Task id");}
    else if(task.completion_time == null){
        task.completion_time = new Date();
        if(TaskDAO.updateTask(taskID,task) != null){
            res.status(200).send("Task completed successfully");
        }
        else{
            res.status(400).send("Error");
        }
    }
    else{
        res.status(400).send("Task is already completed");
    }
}