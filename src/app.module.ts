import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptModule } from './bcrypt/bcrypt.module';
import { TasksModule } from './tasks/tasks.module';
import { JwtModule } from './jwt/jwt.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    //POSTGRES
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'root',
    //   database: 'nest',
    //   entities: ['dist/**/*.entity{.ts,.js}'],
    //   synchronize: false,
    // }),
    //MSSQL SERVER
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'DESKTOP-4DA5M71',
      port: 1433,
      username: 'root',
      password: 'root',
      database: 'nest',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),

    UsersModule,
    BcryptModule,
    TasksModule,
    JwtModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
