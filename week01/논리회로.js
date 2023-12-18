const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//1.논리연산자
//AND
function and(val1,val2){
    return val1 & val2;
}
//OR
function or(val1,val2){
    return val1 | val2;
}
//NOT
function not(val){
    return ~val+2;
}

rl.question('첫 번째 값을 입력하세요 (0 또는 1): ', (userInput1) => {
    rl.question('두 번째 값을 입력하세요 (0 또는 1): ', (userInput2) => {
        rl.close();

        // 입력값을 숫자로 변환
        const value1 = parseInt(userInput1, 10);
        const value2 = parseInt(userInput2, 10);

        // AND
        const andResult = and(value1, value2);
        console.log('AND 연산 결과:', andResult);

        // OR
        const orResult = or(value1, value2);
        console.log('OR 연산 결과:', orResult);

        // NOT
        const notResult = not(value1);
        console.log('NOT 연산 결과:', notResult);
    });
});

//2.산술연산자
// AND 연산 수행 함수
function customAND(value1, value2) {
    return and(value1, value2);
}

// OR 연산 수행 함수
function customXOR(value1, value2) {
    return or(value1, value2);
}

// 반가산기 함수
function halfAdder(bit1, bit2) {
    const sum = customXOR(bit1, bit2);
    const carry = customAND(bit1, bit2);

    return [sum, carry];
}

// 전가산기 함수
function fullAdder(bit1, bit2, carryIn) {
    const halfAdderResult1 = halfAdder(bit1, bit2);
    const sum = customXOR(halfAdderResult1[0], carryIn);

    const carryFromHalfAdder = customAND(halfAdderResult1[0], carryIn);
    const carryFromSecondAND = customAND(bit1, bit2);
    const carry = customXOR(carryFromHalfAdder, carryFromSecondAND);

    return [sum, carry];
}

function addersResults(bit1, bit2) {
    const halfAdderResult = halfAdder(bit1, bit2);
    const fullAdderResult = fullAdder(bit1, bit2, 0);

    return [halfAdderResult, fullAdderResult];
}

rl.question('첫 번째 값을 입력하세요: ', (userInput1) => {
    rl.question('두 번째 값을 입력하세요: ', (userInput2) => {
        rl.close();

        // 입력값을 숫자로 변환
        const value1 = parseInt(userInput1, 10);
        const value2 = parseInt(userInput2, 10);

        const results = addersResults(value1, value2);
        console.log('결과:', results);

    });
});

//3.진수변환
//10->2
function converttobinary(num){
    const binaryarr = [];
    while (num >0){
        binaryarr.unshift(num % 2);
        num = Math.floor(num/2);
    }

    return binaryarr
}

rl.question('10진수를 입력하세요: ', (userInput1) => {
    rl.close();

    // 입력값
    const value = parseInt(userInput1, 10);

    const andResult = converttobinary(value);
    console.log('10진수에서 2진수 변환 결과:', andResult);

});

//2->10
function converttodecimal(num){
    const decimalnum = num.reduce((accumulator,currentval) => {
        return accumulator * 2 + currentval;
    },0);

    return decimalnum
}

rl.question('2진수 배열을 입력하세요: ', (userInput) => {
    rl.close();

    // 입력값
    const binaryArray = userInput.split(',').map(Number);

    const andResult = converttodecimal(binaryArray);
    console.log('2진수에서 10진수 변환 결과:', andResult);

});

//4.응용

function addbinary(val1,val2) {
    while(val1.length < val2.length){
        val1.unshift(0);
    }

    while(val2.length < val2.length){
        val2.unshift(0);
    }

    const resarr = [];
    let carry = 0;

    for (let i = val1.length - 1; i >= 0; i--) {
        const sum = val1[i] + val2[i] + carry;
        resarr.unshift(sum % 2);
        carry = Math.floor(sum / 2);
    }

    if (carry > 0){
        resarr.unshift(carry);
    }

    return resarr;
}

rl.question('첫 번째 배열 입력: ', (userInput1) => {
    rl.question('두 번째 배열 입력: ', (userInput2) => {
        rl.close();

        // 입력값을 숫자로 변환
        const binaryArray1 = userInput1.split(',').map(Number);
        const binaryArray2 = userInput2.split(',').map(Number);

        // 2진수 덧셈 연산
        const andResult = addbinary(binaryArray1, binaryArray2);
        console.log('2진수 덧셈 연산 결과:', andResult);
    });
});

