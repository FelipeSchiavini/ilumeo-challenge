import { IsString } from "class-validator";

export class UpdateUserTimeClockInput {
  @IsString()
  id: string;

  @IsString()
  endTime: string;
}

export class CreateUserTimeClockInput {
  @IsString()
  userId: string;

  @IsString()
  startTime: string;
}
