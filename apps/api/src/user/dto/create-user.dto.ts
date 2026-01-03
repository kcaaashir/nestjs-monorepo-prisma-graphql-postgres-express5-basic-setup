// apps/users/src/users/dto/create-user.dto.ts
import { Role } from '@prisma/client'; // Import the Role enum from Prisma
import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsEnum } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  email: string;

  @Field()
  @IsString()
  password: string;

  @Field(() => String)
  @IsEnum(Role)
  role: Role;

  @Field()
  @IsString()
  tenantId: string;

  @Field()
  @IsString()
  phoneNumber: string;

  @Field({ nullable: true })
  @IsString()
  address?: string;

  @Field()
  @IsString()
  fullName: string;

  @Field({ nullable: true })
  @IsString()
  gender?: string;

  @Field({ nullable: true })
  @IsString()
  profilePictureUrl?: string;

  @Field({ nullable: true })
  @IsString()
  dateOfBirth?: string;
}
