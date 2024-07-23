import { Request, Response } from "express";
import { create, deleted, getAll, getOne, update } from "../services/department.service";
export class DepartmentController {
 
    constructor() {}
  
    all = async (req: Request, res: Response) => {
      const { status, message, data } = await getAll();
      return res.status(status).json({
        message,
        data,
      });
    };
  
    one = async (req: Request, res: Response) => {
      const {id}=req.params
      const { status, message, data } = await getOne(parseInt(id) as number);
      return res.status(status).json({
        message,
        data,
      });
    };
    createDepartment = async (req: Request, res: Response) => {
      const { status, message, data } = await create(req.body);
      return res.status(status).json({
        message,
        data,
      });
    };
    updateDepartment = async (req: Request, res: Response) => {
      const {id}=req.params
      const { status, message, data } = await update(parseInt(id) as number,req.body);
      return res.status(status).json({
        message,
        data,
      });
    };
  
    deleteDepartment = async (req: Request, res: Response) => {
      const {id}=req.params
      const { status, message, data } = await deleted(parseInt(id) as number,req.body);
      return res.status(status).json({
        message,
        data,
      });
    };
    
  }