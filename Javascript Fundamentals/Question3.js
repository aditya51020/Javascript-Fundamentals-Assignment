function searchCharacterClasses(pattern, str) {
    const regex = new RegExp(pattern, 'g');
    return str.match(regex);
}


const testString = "Hello PW 123  @#";


console.log("Digits:", searchCharacterClasses('\\d', testString)); 


console.log("Uppercase Letters:", searchCharacterClasses('[A-Z]', testString)); 


console.log("Lowercase Letters:", searchCharacterClasses('[a-z]', testString)); 


console.log("Special Characters:", searchCharacterClasses('[^a-zA-Z0-9]', testString)); 
