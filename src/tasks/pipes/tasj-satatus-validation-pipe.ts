import { BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task.model";

export class TaskStatusValidationPipe implements PipeTransform{    //class implements an interface

    readonly allowedStatuses = [   //array contain valid status
        TaskStatus.DONE,
        TaskStatus.IN_PROGRESS,
        TaskStatus.OPEN,
    ];

    transform(value: any) {
        value = value.toUpperCase();

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`"${value}" is an invalid status`);
        }
        
        return value;
    }

    private isStatusValid(status: any) {
        const index = this.allowedStatuses.indexOf(status); //Checks if the given status exists within the allowedStatuses array.
        return index !== -1;
    }


}
//create a custom Pipe Method