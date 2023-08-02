function printNumbersDivisibleBy3NotBy2(numbers){
    for(let i=0;i<numbers.length;i++){
        const currentNumber = numbers[i];
        
        if(currentNumber%3!==0){
            continue;
        }
        if(currentNumber%2==0){
            continue;
        }
        console.log(currentNumber);
    }
}
const numbersArray = [1,2,3,4,5,6,7,8,9,10];
printNumbersDivisibleBy3NotBy2(numbersArray);