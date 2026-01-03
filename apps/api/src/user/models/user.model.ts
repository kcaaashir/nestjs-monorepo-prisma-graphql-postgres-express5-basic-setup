import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  role: string;

  @Field()
  tenantId: string;

  @Field()
  createdAt: Date;

  @Field()
  address?: string;

  @Field()
  phoneNumber: string;

  @Field()
  fullName: string;

  @Field()
  gender?: string;

  @Field()
  profilePictureUrl?: string;

  @Field()
  dateOfBirth?: string;
}
