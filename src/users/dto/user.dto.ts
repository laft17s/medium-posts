import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UserDto {
  
  user_id: number;

  @IsNotEmpty()
  full_name: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  email: string;

  created_at: string;
}