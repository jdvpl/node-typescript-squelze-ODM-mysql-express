import { Request, Response } from "express";
import User from "../models/user";


export const getUsers = async(req:Request,res:Response)=>{
  const users=await User.findAll();

  res.json(users)
} 
export const getUser = async(req:Request,res:Response)=>{
  const {id} = req.params;
  const user=await User.findByPk(id);

  if(!user){
    return res.status(404).json({msg: "User not found."});
  }
  return res.json(user)
} 
export const saveUser = (req:Request,res:Response)=>{
  const {body} = req;
  res.json({
    msg: "save user",
    body
  })
} 
export const updateUser = (req:Request,res:Response)=>{
  const {id} = req.params;
  res.json({
    msg: "udate user",
    id
  })
} 
export const deleteUser = (req:Request,res:Response)=>{
  const {id} = req.params;
  res.json({
    msg: "delete user",
    id
  })
} 