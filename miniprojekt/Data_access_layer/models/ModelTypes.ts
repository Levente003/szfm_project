export type UserDataValues = {
    user_ID? : number,
    email : string,
    name : string,
    password : string,
    admin : boolean,
    createdAt? : Date,
    updatedAt? : Date
}

export type TaskDataValues = {
    ID? : number,
    name : string,
    description? : string | null,
    deadline : Date,
    completion_time? : Date | null,
    assigned_user_ID? : number
}