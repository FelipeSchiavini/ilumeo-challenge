import { Body, JsonController, Post, Put } from "routing-controllers";
import { CreateUserTimeClockInput, UpdateUserTimeClockInput } from "./time-clock.controller.model";
import { UpdateTimeClockUseCase, UpdateTimeClockUseCaseOutput } from "../usecases/update-time-clock.use-case";
import { CreateTimeClockUseCase } from "../usecases/create-time-clock.use-case";
import { Inject, Service } from "typedi";

@JsonController()
@Service()
export class TimeClockController  {

  // @Inject()
  // private updateTimeClockUseCase: UpdateTimeClockUseCase;

  // @Inject()
  // private createTimeClockUseCase: CreateTimeClockUseCase;

  // @Post("/time-clock/create")
  // async createUserTimeClock(@Body() input: CreateUserTimeClockInput){
  //   return this.createTimeClockUseCase.exec(input)
  // }
  
  // @Put("/time-clock/finish")
  // async updateUserTimeClock(@Body() input: UpdateUserTimeClockInput): Promise<UpdateTimeClockUseCaseOutput>{
  //   return this.updateTimeClockUseCase.exec({
  //     userId: input.userId,
  //     startClockTime: '',
  //     endClockTime: input.endClockTime
  //   })
  // }
}