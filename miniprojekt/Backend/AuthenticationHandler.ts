import {Request,Response} from "express";
import UserDAO from "../Data_access_layer/DAO/UserDAO";
import { randomUUID } from "crypto";
import { UserDataValues } from "../Data_access_layer/models/ModelTypes";


let Tokens : Map<string,number> = new Map();

export async function Login(req:Request, res: Response){
    
    const {email, password} = req.body;

    let user : UserDataValues = (await UserDAO.getUserByEmail(email))?.dataValues;

    if(user == null){
        res.status(401).send("Invalid email address!");
        return;
    }
    else if(user.password != password){
        res.status(401).send("Invalid password!");
        return;
    }

    
    const token = randomUUID();

    if(user.user_ID != null)
        Tokens.set(token,user.user_ID);

    console.log(`User ${email} logged in with token ${token}`);

    res.status(200).json({
        token : token
    });
}

export async function Logout(req:Request, res: Response){
    const token = req.headers.authorization;

    console.log(`Logging out token: ${token}`);

    if(token != null)
        Tokens.delete(token);

    res.status(200).send("Successfully logged out!");
}

export async function GetCurrentUser(req: Request, res : Response){
    let user = await GetAuthenticatedUser(req,res);


    if(user == null){res.status(400).send("Invalid token"); return;}
    else{res.status(200).json({user: user}); return;}
}

export async function GetUserID(req:Request, res: Response){
    const token = req.headers.authorization?.replace("Bearer ","");

    if(token == null){res.status(400).send("Token is missing"); return;}

    const userID = await GetUserIDByToken(token);

    if(userID == null){res.status(403).send("Invalid token"); return;}
    else res.status(200).json({userID: userID});
}

export async function GetUserByToken(token : string) : Promise<UserDataValues|null> {
    if(Tokens.has(token)){
        let user : UserDataValues = (await UserDAO.getUserById(Tokens.get(token)))?.dataValues;
        return user;
    }
    else{
        return null;
    }
}

export function GetUserIDByToken(token:string) : number|undefined{
    return Tokens.get(token);
}


export async function GetAuthenticatedUser(req:Request, res: Response) : Promise<UserDataValues|null>{
    const token = req.headers.authorization?.replace("Bearer ","");

    if(token == null){return null}

    const user = await GetUserByToken(token);

    if(user == null){return null;}
    
    return user;
}

export async function IsAuthenticatedUserAdmin(req:Request, res: Response) : Promise<boolean>{
    const token = req.headers.authorization?.replace("Bearer ","");

    if(token == null){return false}

    const user = await GetUserByToken(token);

    if(user == null){return false;}
    
    return user.admin;
}