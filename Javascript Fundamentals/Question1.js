function outerFunction(outerParameter){

    const innerVariable = "i am Outer Function";

    return function innerFuntion(){
        console.log('Outer Parameter:', outerParameter)
        console.log('inner Variable:', innerVariable)
    };
}

const myInnerFuntion = outerFunction("Hi");

const result = myInnerFuntion();
console.log(result)
