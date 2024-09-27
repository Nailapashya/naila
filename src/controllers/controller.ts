import { Request, Response } from "express";
import * as service from "../services/service";
import { User } from "@prisma/client"

// Register (Create User)
export const Register = async (req:Request , res:Response ) => {
    try {
        const { body } = req;
        const data = await service.register(body as User);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}
// export const Registerr = async  (req:Request , res:Response) => {
//     try {
//         const { body } = req;
//         const data = await service.register(body as User);
//         return res.status(200).json(data);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json(error);
//     }
// }

// Login User
export const login = async (req:Request , res:Response ) => {
    try {
        const { body } = req;
        const data = await service.login(body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

// Get User by ID (READ User)
export const findById = async (req:Request, res:Response ) => {
    try {
        const userId = parseInt(req.params.id);
        const data = await service.findById(userId);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

// Get All Users (READ All Users)
export const findAll = async (req:Request , res:Response ) => {
    try {
        const data = await service.findAll();
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

// Update User
export const updateUser = async (req:Request , res:Response ) => {
    try {
        const userId = parseInt(req.params.id);
        const { body } = req;
        const data = await service.updateUser(userId, body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

// Delete User
export const deleteUser = async (req:Request , res:Response ) => {
    try {
        const userId = parseInt(req.params.id);
        const data = await service.deleteUser(userId);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};
