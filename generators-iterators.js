const assert = require('assert')

function *calculate(arg1, arg2){
  yield arg1 * arg2
}

function *main(){
  yield 'Hello'
  yield* calculate(20, 10)
}

const generator = main()
console.log(generator.next());
console.log(generator.next());