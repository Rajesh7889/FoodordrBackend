import express, {Request,Response,NextFunction} from "express"
import { CreateVandorInput } from "../dto/Vandor.dto"

const CreateVandor=(req:Request,resp:Response,next:NextFunction)=>{
    const  {name, address, pincode, foodType, password,ownerName,phone} = <CreateVandorInput> req.body;
    resp.json({message:{name, address, pincode, foodType, password,ownerName,phone}})
}

const GetVanndors = async(req:Request,resp:Response,next:NextFunction)=>{
    resp.json({message:"all vandors!"})
}


const GetBandorById = async(req:Request,resp:Response,next:NextFunction)=>{
    resp.json({message:"specific vandor!"})
}

export {CreateVandor,GetVanndors,GetBandorById}