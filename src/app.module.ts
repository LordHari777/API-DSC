import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TaskExecutionModule } from './task-execution/task-execution.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "be-orgfin",
      autoLoadEntities: true,
      synchronize: true,
    }),
    TaskModule,
    TaskExecutionModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
