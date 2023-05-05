import {  Service } from "typedi";
import { UseCase } from "./usecase.model";

interface UpdateTimeClockUseCaseInput {
  userId: string;
  startClockTime: string;
  endClockTime: string;
}

export interface UpdateTimeClockUseCaseOutput {
  
}

@Service()
export class UpdateTimeClockUseCase implements UseCase<UpdateTimeClockUseCaseInput, UpdateTimeClockUseCaseOutput> {

  async exec (input: UpdateTimeClockUseCaseInput):  Promise<UpdateTimeClockUseCaseOutput>{

    if(this.verifyIfStartAndEndAreInSameDay()){
      throw new Error()
    }

    return {}
  }
  
  private verifyIfStartAndEndAreInSameDay (): boolean {
    return true;
  }
}

