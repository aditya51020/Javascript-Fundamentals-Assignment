function testRegex(pattern, str) {
    const regex = new RegExp(pattern);
    return regex.test(str);
}

console.log(testRegex('^\\d+$', '123abc'));
console.log(testRegex('^Hello', 'Hello World'));