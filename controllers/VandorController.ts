import express, {Request,Response,NextFunction} from "express"
import { CreateVandorInput } from "../dto/Vandor.dto"

const CreateVandor=(req:Request,resp:Response,next:NextFunction)=>{
    const  {name, address,} = <CreateVandorInput> req.body;
}

const GetVanndors = async(req:Request,resp:Response,next:NextFunction)=>{
    resp.json({message:"all vandors!"})
}


const GetBandorById = async(req:Request,resp:Response,next:NextFunction)=>{
    resp.json({message:"specific vandor!"})
}

export {CreateVandor,GetVanndors,GetBandorById}