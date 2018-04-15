export const KEY_TYPE = {
    NUMBER: 'number',
    OPERATOR: 'operator',
    ACTION: 'action',
    DECIMAL: 'decimal',
    EVAL: 'evaluate'
}

export const KEYS = [
    [{
        type: KEY_TYPE.ACTION,
        symbol: 'C',
        value: 'Clear'
    },
    {
        type: KEY_TYPE.ACTION,
        symbol: 'DEL',
        value: 'Delete'
    }], [
        {
            type: KEY_TYPE.NUMBER,
            symbol: '7',
            value: 7
        },
        {
            type: KEY_TYPE.NUMBER,
            symbol: '8',
            value: 8
        },
        {
            type: KEY_TYPE.NUMBER,
            symbol: '9',
            value: 9
        },
        {
            type: KEY_TYPE.OPERATOR,
            symbol: '/',
            value: 'div'
        },
    ],
    [{
        type: KEY_TYPE.NUMBER,
        symbol: '4',
        value: 4
    },
    {
        type: KEY_TYPE.NUMBER,
        symbol: '5',
        value: 5
    },
    {
        type: KEY_TYPE.NUMBER,
        symbol: '6',
        value: 6
    }, {
        type: KEY_TYPE.OPERATOR,
        symbol: 'x',
        value: 'mul'
    }], [{
        type: KEY_TYPE.NUMBER,
        symbol: '1',
        value: 1
    },
    {
        type: KEY_TYPE.NUMBER,
        symbol: '2',
        value: 2
    },
    {
        type: KEY_TYPE.NUMBER,
        symbol: '3',
        value: 3
    }, {
        type: KEY_TYPE.OPERATOR,
        symbol: '-',
        value: 'sub'
    }],
    [{
        type: KEY_TYPE.DECIMAL,
        symbol: '.',
        value: '.'
    },
    {
        type: KEY_TYPE.NUMBER,
        symbol: '0',
        value: 0
    },
    {
        type: KEY_TYPE.EVAL,
        symbol: '=',
        value: 'equal'
    },
    {
        type: KEY_TYPE.OPERATOR,
        symbol: '+',
        value: 'add'
    }]
]