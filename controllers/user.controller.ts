import { Request, Response } from "express";


export const getUsers = (req:Request,res:Response)=>{
  res.json({
    msg: "Users"
  })
} 
export const getUser = (req:Request,res:Response)=>{
  const {id} = req.params;
  res.json({
    msg: "User",
    id
  })
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