import { IsNotEmpty, IsOptional, IsString, isNotEmpty } from 'class-validator';

export class CraeteUser {
  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
