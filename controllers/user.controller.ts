import { Request, Response } from "express";
import User from '../models/user';


export const getUsers = async(req:Request,res:Response)=>{
  const status={status:true}
  const {limit=5, offset=1}=req.query;

  const [total,users]=await Promise.all([
    User.count({where:status}),
    User.findAll({ offset: Number(offset), limit: Number(limit), where:status, order: [['id', 'DESC']]})
  ])

  res.json({total,users})
} 


export const getUser = async(req:Request,res:Response)=>{
  const {id} = req.params;
  const user=await User.findByPk(id);

  if(!user){
    return res.status(404).json({msg: "User not found."});
  }
  return res.json(user)
} 

export const saveUser = async(req:Request,res:Response)=>{

  const {body} = req;
  try {
    const existeEmail = await User.findOne({
      where:{
        email: body.email
      }
    })
    if(existeEmail){
      return  res.status(400).json({msg:`Ya existe un usuario con el correo ${body.email}`});
    }
    const user=await User.create(body);
    res.json(user);

  } catch (error) {
    console.log(error);
    res.status(500).json({msg: "Error saving user."});
  }

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