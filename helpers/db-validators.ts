import User from "../models/user";


export const existeCorreo=async(email='')=>{
    // verificar si el correo existe
    const existeEmail = await User.findOne({
      where:{
        email: email
      }
    })
    if (existeEmail){
      throw new Error(`El Correo ${email} ya existe`);
    }
}

