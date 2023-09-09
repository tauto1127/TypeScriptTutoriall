function getFizzBuzzString(i: number) : string{
    if (i % 3 == 0 && i % 5 == 0){
        return "FizzBuzz";
    }else if(i % 3 == 0){
        return "Fizz";
    }else if(i % 5 == 0){
        return "Buzz";
    }else{
        return i.toString();
    }
}

function sequence(start: number, end: number): number[]{
    const arrays = [];
    for(let i = start; i <= end; i++){
        arrays.push(i);
    }
    return arrays;
}

for(let i = 1; i<= 100; i++){
    const message = getFizzBuzzString(i);
    console.log(message);
}