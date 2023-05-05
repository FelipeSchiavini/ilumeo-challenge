import { Service } from "typedi";
import { UseCase } from "./usecase.model";

interface CreateTimeClockUseCaseInput {
  userId: string;
}

interface CreateTimeClockUseCaseOutput {
  
}

@Service()
export class CreateTimeClockUseCase implements UseCase<CreateTimeClockUseCaseInput, CreateTimeClockUseCaseOutput> {
  async exec (input: CreateTimeClockUseCaseInput):  Promise<CreateTimeClockUseCaseOutput>{
    console.log("🚀 ~ file: create-time-clock.use-case.ts:13 ~ UpdateTimeClockUseCase ~ exec ~ input:", input)
    return {test: 'resoista'}
  }
  
}