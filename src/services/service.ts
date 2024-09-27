import db from "../lib/db"
import * as validation from "../utils/validation"
import {User} from "@prisma/client"
import  bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//Register sebagai create User
export const register = async(body: User) => {
    const {error} = validation.registerSchema.validate(body)
    if(error){
        console.log(error)
    }

    const exitingEmail = await db.user.count({
        where: {email: body.email}
    })
    if(exitingEmail > 0){
        throw new Error("Email already exists")
    }

    const hashPassword = await bcrypt.hash(body.password, 10)

    const user = await db.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: hashPassword,
            levelId: body.levelId,
            departmentId: body.departmentId
        }
    })

    return user
}

export const login = async(body: User) => {
    const {error, value} = validation.loginSchema.validate(body)

    if(error) {
        throw new Error(`Terjadi error: ${error.message}`)
    }

    const exitingEmail = await db.user.findUnique({
        where: {email: value.email}
    })

    if(!exitingEmail) {
        throw new Error("Email does not found")
    }

    const matchPassword = await bcrypt.compare(value.password, exitingEmail.password)

    if(!matchPassword){
        throw new Error("Wrong password")
    }
    const token = jwt.sign(exitingEmail, process.env.SECRET!, {expiresIn: "1d"})

    return {
            id: exitingEmail.id,
            name: exitingEmail.name,
            email: exitingEmail.email,
            levelId: exitingEmail.levelId,
            departmentId: exitingEmail.departmentId,
            token,
        }

    }      

    // READ User (by ID)
export const findById = async (userId: number) => {
    const user = await db.user.findUnique({
      where: { id: userId },
      include: {
        level: true,        
        department: true,  
      },
    });
  
    if (!user) {
      throw new Error("User not found");
    }
  
    return user;
  };
  
  // READ All Users
  export const findAll = async () => {
    const users = await db.user.findMany({
      include: {
        level: true,        
        department: true,   
      },
    });
  
    return users;
  };

  // UPDATE User
export const updateUser = async (userId: number, body: Partial<User>) => {
    const { error, value } = validation.updateSchema.validate(body);
    if (error) {
      throw new Error(`Validation error: ${error.message}`);
    }
  
    const existingUser = await db.user.findUnique({
      where: { id: userId },
    });
  
    if (!existingUser) {
      throw new Error("User not found");
    }
  
    const updatedUser = await db.user.update({
      where: { id: userId },
      data: {
        name: body.name || existingUser.name,
        email: body.email || existingUser.email,
        password: body.password ? await bcrypt.hash(body.password, 10) : existingUser.password,
        levelId: body.levelId || existingUser.levelId,
        departmentId: body.departmentId || existingUser.departmentId,
      },
    });
  
    return updatedUser;
  };

  // DELETE User
export const deleteUser = async (userId: number) => {
    const existingUser = await db.user.findUnique({
      where: { id: userId },
    });
  
    if (!existingUser) {
      throw new Error("User not found");
    }
  
    await db.user.delete({
      where: { id: userId },
    });
  
    return { message: "User deleted successfully" };
  };
  
