import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Util } from './../util';

const visaRegex = '^(?:4[0-9]{12})(?:[0-9]{3})?$';
const americanExpressRegex = '^(?:3[47][0-9]{13})$';
const maestroRegex = '^(?:(?:5[0678]\\d\\d|6304|6390|67\\d\\d)\\d{8,15})$';
const jcbRegex = '^(?:(?:2131|1800|35\\d{3})\\d{11})$';
const discoverRegex = '^(?:6(?:011|5[0-9]{2})(?:[0-9]{12}))$';
const dinersclubRegex = '^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$';
const mastercardRegex = '^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$';

export const isCreditCard: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {

    if (Util.isNotPresent(control)) return undefined;
    if (new RegExp(americanExpressRegex + '|' +
        visaRegex + '|' +
        maestroRegex + '|' +
        jcbRegex + '|' +
        discoverRegex + '|' +
        mastercardRegex + '|' +
        dinersclubRegex
    ).test(control.value)) {
        return undefined;
    }
    return { 'creditcard': true };
};

export const americanExpress: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {

    if (Util.isNotPresent(control)) return undefined;
    if (new RegExp(americanExpressRegex).test(control.value)) {
        return undefined;
    }
    return { 'americanExpress': true };
};

export const dinersclub: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {

    if (Util.isNotPresent(control)) return undefined;
    if (new RegExp(dinersclubRegex).test(control.value)) {
        return undefined;
    }
    return { 'dinersclub': true };
};

export const discover: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {

    if (Util.isNotPresent(control)) return undefined;
    if (new RegExp(discoverRegex).test(control.value)) {
        return undefined;
    }
    return { 'discover': true };
};
export const jcb: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {

    if (Util.isNotPresent(control)) return undefined;
    if (new RegExp(jcbRegex).test(control.value)) {
        return undefined;
    }
    return { 'jcb': true };
};
export const maestro: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {

    if (Util.isNotPresent(control)) return undefined;
    if (new RegExp(maestroRegex).test(control.value)) {
        return undefined;
    }
    return { 'maestro': true };
};

export const mastercard: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {

    if (Util.isNotPresent(control)) return undefined;
    if (new RegExp(mastercardRegex).test(control.value)) {
        return undefined;
    }
    return { 'mastercard': true };
};

export const visa: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {

    if (Util.isNotPresent(control)) return undefined;
    if (new RegExp(visaRegex).test(control.value)) {
        return undefined;
    }
    return { 'visa': true };
};

// tslint:disable-next-line:variable-name
export const CreditCardValidators = {
    isCreditCard,
    americanExpress,
    dinersclub,
    discover,
    jcb,
    maestro,
    mastercard,
    visa
};
