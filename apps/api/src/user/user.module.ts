import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '@app/prisma';
import { UsersService } from './user.service';
import { UsersResolver } from './user.resolver';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: 'your-jwt-secret', // Replace with a more secure secret
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [UsersService, UsersResolver],
})
export class UserModule {}
