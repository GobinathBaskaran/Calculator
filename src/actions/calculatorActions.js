import {
    KEY_PRESSED,
    CLEAR,
    DELETE
} from './types';
import CalculatorService from '../service/calculatorService';


export const keyPress = (key) => {
    return {
        type: KEY_PRESSED,
        key
    }
};

export const deleteInput = () => {
    return {
        type: DELETE
    }
};

export const clear = () => {
    return {
        type: CLEAR
    }
};