import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../application/use-cases/create-user.use-case';
import { CreateUserDTO } from '../../application/dtos/create-user.dto';

interface Controller {
  handle(request: Request, response: Response): Promise<Response>;
}

export class CreateUserController implements Controller {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) { }

  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data: CreateUserDTO = request.body;
      const ret = await this.createUserUseCase.execute({}, data);

      return response.status(201).json(ret);
    } catch (error) {
      return response.status(500).json({ error: error, message: "Failed to create user" });
    }
  }
}
