import { Router } from 'express';
import { CreateUserController } from './create-user.controller';
import { CreateUserUseCase } from '../../application/use-cases/create-user.use-case';
import { UserRepository } from '../repositories/user.repository';

const routes = Router();

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

routes.post('/create-user', createUserController.handle);

export { routes };