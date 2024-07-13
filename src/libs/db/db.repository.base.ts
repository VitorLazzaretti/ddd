import { RepositoryPort } from "../ddd/repository.port.base";

export class DatabaseRepositoryBase<Entity, Schema> implements RepositoryPort<Entity> {
  insert(entity: Entity | Entity[]): Promise<void> {
    console.log("ENTITY SAVED! \n\n", entity, "\n\n");
    return Promise.resolve();
  }
  findOneById(id: string): Promise<Entity | null> {
    throw new Error("Method not implemented.");
  }
  findAllPaginated(params: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  delete(entity: Entity): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  transaction<T>(handler: () => Promise<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }

  findAll(): Promise<Entity[]> {
    return Promise.resolve([]);
  }
}