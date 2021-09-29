/*
for ([initial Expression]; [condition Expression]; [increment Expression]){

[statement]
*/
//1
function countToTen(){
    for(let i=1; i<=10;i+=1){
        console.log(i)
    }
}
// countToTen()
//2
function countFromOne(number){
    for(let i =1; i <= number; i++){
        console.log(i)
    }
}
// countFromOne(5)
//3
/*
== equailty operator 
=== strict equality operator
'4' == 4 //true
'4' === 4 //false
*/
// console.log('4' == 4 )
// console.log('4' === 4 )
function countEveryEven(number){
  for(let i =1; i <= number; i++){
      if(i%2 === 0){
          console.log(i)
      }
    }
}
// countEveryEven(10)
//4
function countEveryOdd(int){
    for(let i = 1; i<= int; i++){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}
// countEveryOdd(10)
//5 

function countEvens(numbers){
    let count = 0
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 ===0){
            count+=1
        }
    }
  return count
}

console.log(countEvens([1,2,3,4,5,6,7,8,9,12]))
