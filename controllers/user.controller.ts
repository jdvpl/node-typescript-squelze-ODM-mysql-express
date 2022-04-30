import { Request, Response } from "express";
import User from '../models/user';


export const getUsers = async(req:Request,res:Response)=>{
  const status={status:true}
  const {limit=5, from=0}=req.query;

  const [total,users]=await Promise.all([
    User.count({where:status}),
    User.findAll({ offset: Number(from), limit: Number(limit), where:status, order: [['id', 'DESC']]})
  ])

  res.json({total,limit,from,users})
} 


export const getUser = async(req:Request,res:Response)=>{
  const {id} = req.params;
  const user=await User.findByPk(id);
  return res.json(user)
} 

export const saveUser = async(req:Request,res:Response)=>{
  const {body} = req;
  try {
    const user=await User.create(body);
    res.json(user);

  } catch (error) {
    console.log(error);
    res.status(500).json({msg: "Error saving user."});
  }

} 
export const updateUser = async(req:Request,res:Response)=>{
  const {id} = req.params;
  const {body} = req;
  try {
    const user=await User.findByPk(id);
    await user?.update(body);
    return res.json(user);

  } catch (error) {
    console.log(error);
    res.status(500).json({msg: "Error updating user."});
  }
} 
export const deleteUser = async(req:Request,res:Response)=>{
  const {id} = req.params;
  const status={status:false};
  try {
    const user=await User.findByPk(id);
    await user?.update(status);
    return res.json(user);

  } catch (error) {
    console.log(error);
    res.status(500).json({msg: "Error deleting user."});
  }
} 