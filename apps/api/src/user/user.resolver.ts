// apps/api/src/users/users.resolver.ts
import { User } from './models/user.model';
import { LoginInput } from './dto/login.dto';
import { UsersService } from './user.service';
import { CreateUserInput } from './dto/create-user.dto';
import { UpdateUserInput } from './dto/update-user.dto';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: string) {
    return this.usersService.delete(id);
  }

  @Query(() => [User])
  async findAllUsers() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  async findOneUser(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => String)
  async login(@Args('loginInput') loginInput: LoginInput) {
    return this.usersService.login(loginInput);
  }
}
