import { IsString } from "class-validator";

export class UpdateUserTimeClockInput {
  @IsString()
  userId: string;

  @IsString()
  endClockTime: string;
}

export class CreateUserTimeClockInput {
  @IsString()
  userId: string;
}
