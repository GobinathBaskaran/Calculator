export default class CalculatorService {
    static operators = '+-/*=';

    static processNumber(input, key) {
        if (!key)
            return input;
        input += key.symbol;
        return input;
    }

    static processOperator(input, key) {
        if (!key || (!input.length && key.symbol != '-'))
            return input;

        if ((!input.length) && key.symbol == '-') {
            input = key.symbol;
            return input;
        }

        input = input.replace(/x/g, "*");
        let lastChar = input.slice(-1);

        if (input.length == 1 && key.symbol != '-' && this.operators.indexOf(lastChar) > -1) {
            input = '';
            return input;
        }

        if (lastChar == '' || this.operators.indexOf(lastChar) <= -1) {
            input += key.symbol;
        } else {
            input = input.replace(/.$/, key.symbol);
        }
        return input.replace(/\*/g, "x");
    }

    static processDecimal(input, key) {
        if (!key)
            return input;

        if (!input.length) {
            input += key.symbol;
            return input;
        }
        let expressions = input
            .replace(/x/g, "*")
            .replace(/^-|([+\-*/])-/g, "$1#")
            .split(/([+\-*/])/)
            .map(e => e.replace("#", "-"))
            .filter(n => n != '');

        currentInput = expressions[expressions.length - 1];
        lastChar = currentInput.slice(-1);
        if (lastChar == '' || lastChar != '.') {
            if (currentInput.indexOf('.') > -1)
                return currentInput;
            currentInput += key.symbol;
        } else {
            currentInput = currentInput.replace(/.$/, key.symbol);
        }
        expressions.splice(expressions.length - 1, 1, currentInput);
        return expressions.join('').replace(/\*/g, "x");
    }

    static evaluate(input) {
        let output = '';
        if (!input.length) {
            return output;
        }

        // build expression tree 
        let expressions = input
            .replace(/x/g, "*")
            .replace(/^-|([+\-*/])-/g, "$1#")
            .split(/([+\-*/])/)
            .map(e => e.replace("#", "-"))
            .filter(n => n != '');

        let numberBuffer = [];
        let operator = '';

        // process each node of the tree to compute the result
        for (var node of expressions) {
            if (isNaN(node)) {
                operator = node;
            } else {
                numberBuffer.push(parseFloat(node))
            }

            if (numberBuffer.length == 2 && operator != '') {
                let firstIndex = numberBuffer.length - 2;
                let secondIndex = numberBuffer.length - 1;
                numberBuffer[firstIndex] = this.compute(numberBuffer[firstIndex], numberBuffer[secondIndex], operator)
                numberBuffer.splice(secondIndex, 1);
            }
        }
        if (numberBuffer.length <= 2)
            output = `${numberBuffer.join()}`;
        return output;
    }

    static compute(a, b, operator) {
        let c = 0;
        switch (operator) {
            case '+':
                c = a + b;
                break;
            case '-':
                c = a - b;
                break;
            case '*':
                c = a * b;
                break;
            case '/':
                if (b == 0) {
                    c = 'Infinity';
                    break
                }
                c = a / b;
                break;
        }
        return c;
    }
}