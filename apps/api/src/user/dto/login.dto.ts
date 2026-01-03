// apps/api/src/users/dto/login.dto.ts
import { IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field()
  @IsString()
  email: string;

  @Field()
  @IsString()
  password: string;
}
