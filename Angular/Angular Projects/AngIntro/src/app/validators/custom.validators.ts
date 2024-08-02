import { AbstractControl, ValidationErrors } from "@angular/forms";

export class noSpace {
    static noSpaceVlidations(control: AbstractControl): ValidationErrors | null{

        let controlValue = control.value as string;

        if(controlValue.indexOf(' ') >= 0){
            return {noSpaceVlidations: true}
        }else{
            return null;
        }

    }
}