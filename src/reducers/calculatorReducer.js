import {
    KEY_PRESSED,
    CLEAR,
    DELETE
} from '../actions';
import { KEY_TYPE } from '../shared/defaultData';
import CalculatorService from '../service/calculatorService';

const INITIAL_STATE = {
    default: {
        output: '',
        input: '',
    },
    output: '',
    input: ''
};

export default (state = INITIAL_STATE, action) => {
    if (action && action.type) {

        let input = state.input;
        let key = action.key;

        switch (action.type) {
            case KEY_PRESSED:
                switch (key.type) {
                    case KEY_TYPE.NUMBER:
                        input = CalculatorService.processNumber(input, key);
                        state = { ...state, input: input };
                        break;

                    case KEY_TYPE.OPERATOR:
                        input = state.output.length ? state.output : state.input;
                        input = CalculatorService.processOperator(input, key);
                        state = { ...state, input: input };
                        break;

                    case KEY_TYPE.DECIMAL:
                        input = CalculatorService.processDecimal(input, key);
                        state = { ...state, input: input };
                        break;

                    case KEY_TYPE.EVAL:
                        output = CalculatorService.evaluate(input)
                        state = { ...state, output: output };
                        break;
                }
                break;
            case CLEAR:
                state = { ...state, input: state.default.input, output: state.default.output };
                break;
            case DELETE:
                input = input.replace(/.$/, '');
                if (!input.length) {
                    state = { ...state, input: state.default.input, output: state.default.output };
                    break;
                }
                state = { ...state, input: input };
                break;
        }
    }
    return { ...state };
}