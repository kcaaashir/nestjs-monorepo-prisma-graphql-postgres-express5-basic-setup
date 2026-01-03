// apps/api/src/users/dto/update-user.dto.ts
import { CreateUserInput } from './create-user.dto';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  id: string;
}
