import { response, Router } from 'express';
import { CreateUserController } from './create-user.controller';
import { CreateUserUseCase } from '../../application/use-cases/create-user.use-case';
import { UserRepository } from '../repositories/user.repository';

const routes = Router();


routes.post('/create-user', (req, res) => {
  const userRepository = new UserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);
  const createUserController = new CreateUserController(createUserUseCase);
  
  return createUserController.handle(req, res);
});

export { routes };