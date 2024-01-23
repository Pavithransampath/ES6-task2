// // with argument and with return type

// function isPalindrome(word) {
//     var reversedWord = '';
//     for (var i = word.length - 1; i >= 0; i--) {
//         reversedWord += word[i];
//     }
//     return word === reversedWord;
// }

// var result = isPalindrome("racecar");
// console.log(result);



// //with argument and without return type

// function isArmstrong(number) {
//     var sum = 0;
//     var temp = number;
//     var digits = number.toString().length;

//     while (temp > 0) {
//         var remainder = temp % 10;
//         sum += Math.pow(remainder, digits);
//         temp = Math.floor(temp / 10);
//     }

//     if (sum === number) {
//         console.log(number + " is an Armstrong number.");
//     } else {
//         console.log(number + " is not an Armstrong number.");
//     }
// }

// isArmstrong(153);




// //without argument and with return

// function isPrime() {
//     var number = 7; 
//     if (number <= 1) {
//         return false;
//     }
//     for (var i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// var result = isPrime(); 
// console.log(result); 






// //without argument and without return 

// function reverseNumber() {
//     var number = 12345; 
//     var reversedNumber = 0;
//     while (number > 0) {
//         var digit = number % 10; 
//         reversedNumber = reversedNumber * 10 + digit; 
//         number = Math.floor(number / 10); 
//     }
//     console.log("Reversed number: " + reversedNumber);
// }
// reverseNumber(); 



function length(numb,power){
    let x=numb
    let count=0;
    while(numb!=0){
        let rem=numb % 10;
        numb=(numb-rem)/10
        count++
    }
power(x,count,compare)
}

function power(numb,length,check){
    let y=numb
    let sum=0;
    while(numb!=0){
        let rem=numb % 10;
        numb=(numb-rem)/10
        sum=(rem**length)+sum
    }
check(y,sum)
}

function compare(numb,sum){
    if (numb==sum){
        console.log(`${numb} is an armstrong number`)
    }else{
        console.log(`${numb} is not an armstrong number`)
    }
}
length(1153,power)


