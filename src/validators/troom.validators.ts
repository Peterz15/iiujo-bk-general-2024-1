import { body } from "express-validator";

class TroomValidator {
  public validateTroom = [
    body("name").notEmpty().withMessage("Type Room Name is required"),
    body("name").isString().withMessage("Type Room Name must be string"),
  ];
}
export { TroomValidator };