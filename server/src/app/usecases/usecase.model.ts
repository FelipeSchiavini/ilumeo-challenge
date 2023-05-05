export interface UseCase<TRequest, TEntity> {
  exec(requestObject: TRequest): Promise<TEntity>;
}