let output : string = '';
for(let i : number = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        // console.log('FizzBuzz');
        output += 'FixxBuzz'
    }else if(i % 3 == 0){
        // console.log('Fizz');
        output += 'Fizz'
    }else if(i % 5 == 0){
        // console.log('Buzz');
        output += 'Buzz';
    }else{
        // console.log(i);
        output += i;
    }
    output += ' ';
}
console.log(output);