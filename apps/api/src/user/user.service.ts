// apps/api/src/users/users.service.ts
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { LoginInput } from './dto/login.dto';
import { CreateUserInput } from './dto/create-user.dto';
import { UpdateUserInput } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private jwtService: JwtService, // JWT service to create tokens
    private prisma: PrismaService,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const {
      email,
      password,
      role,
      tenantId,
      phoneNumber,
      address,
      fullName,
      profilePictureUrl,
      dateOfBirth,
    } = createUserInput;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password before saving

    return this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role,
        tenantId,
        address,
        phoneNumber,
        fullName,
        profilePictureUrl,
        dateOfBirth,
      },
    });
  }

  async update(updateUserInput: UpdateUserInput) {
    const { id, email, password, role, tenantId } = updateUserInput;
    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : undefined;

    return this.prisma.user.update({
      where: { id },
      data: {
        email,
        password: hashedPassword,
        role,
        tenantId,
      },
    });
  }

  async delete(id: string) {
    await this.prisma.user.delete({ where: { id } });
    return true;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async login(loginInput: LoginInput) {
    const { email, password } = loginInput;
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const payload = { email: user.email, sub: user.id }; // JWT payload
    const token = this.jwtService.sign(payload); // Generate JWT token

    return token;
  }
}
