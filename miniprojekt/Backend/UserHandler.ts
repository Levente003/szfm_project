import {Request,Response} from "express";
import UserDAO from "../Data_access_layer/DAO/UserDAO";
import { UserDataValues } from "../Data_access_layer/models/ModelTypes";
import { GetAuthenticatedUser, IsAuthenticatedUserAdmin } from "./AuthenticationHandler";

export async function CreateUser(req:Request, res: Response){

    if(!(await IsAuthenticatedUserAdmin(req,res))){
        console.log("Unauthorized")
        res.status(403).send("No permission");
        return;
    }


    const {email, password, name, isAdmin} = req.body;

    if(email == null || email == ""){
        res.status(400).send("Invalid email");
        return;
    }

    var user : UserDataValues = (await UserDAO.getUserByEmail(email))?.dataValues;

    if(user != null){
        res.status(400).send("User with this email already exists");
        return;
    }

    if(password == null || password == ""){res.status(400).send("Password is empty"); return;}
    if(name == null || name == ""){res.status(400).send("Name is empty"); return;}

    user = {
        email : email,
        password : password,
        name : name,
        admin : isAdmin || false
    };

    await UserDAO.createUser(user);

    res.status(200).send("Successfully created user");
}

export async function DeleteUser(req:Request, res: Response) {
    if(!(await IsAuthenticatedUserAdmin(req,res))){
        res.status(403).send("No permission");
        return;
    }


    const {userID} = req.body;

    if(userID == -1){
        res.status(403).send("Can't delete default admin user!");
        return;
    }
    
    let result = await UserDAO.deleteUser(userID);

    if(result){
        res.status(200).send("User deleted sucessfully");
    }
    else{
        res.status(400).send("Error while deleting user");
    }
}

export async function UpdateUser(req:Request, res: Response) {
    let {userID,email,password,name,isAdmin} = req.body;

    let authenticatedUser = await GetAuthenticatedUser(req,res);
    if(authenticatedUser == null || (!authenticatedUser?.admin && authenticatedUser?.user_ID != userID)){
        res.status(403).send("No permission");
        return;
    }

    if(!authenticatedUser?.admin){
        isAdmin = false;
    }


    

    let userData : UserDataValues = {
        email : email,
        password : password,
        name : name,
        admin : isAdmin
    }
    
    try{
        let result = await UserDAO.updateUser(userID,userData);
        if(result != null){
            res.status(200).send("User updated sucessfully");
        }
        else{
            res.status(400).send("Error while updating user");
        }
    }
    catch(err){
        console.log(err);
        res.status(400).send(err.errors?.map(x => x.message));
    }


}

export async function GetAllUsers(req:Request, res: Response) {
    if(!(await IsAuthenticatedUserAdmin(req,res))){
        res.status(403).send("No permission");
        return;
    }


    let result : UserDataValues[] = (await UserDAO.getAllUsers()).map(x => x.dataValues);

    res.status(200).json({
        users: result
    });
}
