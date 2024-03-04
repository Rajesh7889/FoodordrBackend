import express, {Request,Response,NextFunction} from "express"

const CreateAdmin=(req:Request,resp:Response,next:NextFunction)=>{
    resp.json({message:"Hell from Admin!"})
}




export {CreateAdmin}