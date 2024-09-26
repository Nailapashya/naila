import joi from "joi"

export const registerSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
})

export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
})

export const updateSchema = joi.object({
  name: joi.string().optional(),
  email: joi.string().optional().email(),
  password: joi.string().optional().min(8),
  levelId: joi.string().optional(),
  departmentId: joi.string().optional()
});
