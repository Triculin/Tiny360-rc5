export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config:any = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address like john@gmail.com',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'maxlength':`Maximum length ${validatorValue.requiredLength}`,
            'textWithAlphabets':'only allow alphabets',
            'textwithNumbers':'only allow numbers',
           'textWithAlphanumeric':'allow characters and numbers',
           'invalidDate':'invalid date format'
        //    'invalidDropdown':'select any one'
           

        };

        return config[validatorName];
    }

    static creditCardValidator(control:any) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    static emailValidator(control:any) {
        // RFC 2822 compliant regex
        if (control.value==null ||control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static passwordValidator(control:any) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value==null ||control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }

     static textValidator(control:any) {
       
        if (control.value==null ||control.value.match(/^[A-Za-z]*$/)) {
            return null;
        } 
        else {
            return { 'textWithAlphabets': true };
        }
    }

     static numberValidator(control:any) {
       
        if (control.value==null ||control.value.match(/^[0-9]*$/)) {
            return null;
        } else {
            return { 'textWithNumbers': true };
        }
    }

     static textNumberValidator(control:any) {
       
         if (control.value==null ||control.value.match(/^[A-Za-z0-9]*$/)) {
            return null;
        } else {
            return { 'textWithAlphanumeric': true };
        }
    }

     static dateValidator(control:any) {
       
         if (control.value==null|| control.value>("/^\d{1,2}\.\d{1,2}\.\d{4}$/")) {
            return null;
        } else {
            return { 'invalidDate': true };
        }
    }

    //   static dropDownValidator(control:any) {
       
    //      if (control.value==null || control.value.match("/^(?!.*(shop))/")) {
    //         return null;
    //     } else {
    //         return { 'invalidDropdown': true };
    //     }
    // }
    
}