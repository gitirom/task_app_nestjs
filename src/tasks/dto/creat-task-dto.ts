import { IsNotEmpty } from "class-validator";

//create a dto 
//DTOs define clear and explicit structures for data being exchanged between different parts of your application

export class CreateTaskDto {
    //Pipes are using for transforming and validating data 
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}




