import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';


@Module({
  imports: [TasksModule],
})
export class AppModule {}




/* 
  defining a module @module
  app module is starting point of the app organize components, that serves to organize and structure your application's code
  +nest g module tasks => for create a new module
  defining a controller @Controller
  + nest g controller tasks --no-spec
  define a service
  + nest g service tasks --no-spec
  @injectable : It marks classes as providers, allowing them to be injected into other parts of the application.
  
  dependency injection is done with in a constractor of the class
  
  */