export interface UseCase<RequestData, ResponseData> {
  execute(user: { id: string; }, data: RequestData): Promise<ResponseData>;
}