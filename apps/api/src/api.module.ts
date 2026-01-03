import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApiController } from './api.controller';
import { PatientModule } from './patient/patient.module';
import { PrismaModule } from '@app/prisma/prisma.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    PatientModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true, // Automatically generate schema.gql file
      sortSchema: true,
      playground: true,
      driver: ApolloDriver,
    }),
    PrismaModule,
    UserModule,
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
