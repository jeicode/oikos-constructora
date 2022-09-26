import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control && control.value && control.value.toString() || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }


  /**
   * Check if some field on form have errors in the validation
   * @param field: example: 'email'
   * @returns Promise<Boolean> : true || false
   */
  hasErrorsFieldForm(form:FormGroup, field: string, showErrors:boolean = false): boolean{

    if (form.get(field)?.invalid &&  (form.get(field)?.dirty ||
        form.get(field)?.touched || showErrors)) {
          return true
    }

    return false

  }
}
