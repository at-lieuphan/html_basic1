//exercise 1 
var a = 5;
var b = 10;
var c;
c = (a == b) ? 3 * (a + b) : (a + b);
console.log(c);

//exercise 2
var x = 22;
if(x <= 19) console.log(19 - x);
else console.log((x - 19)* 3);
//exercise 3
var y ='1*9';
var num, arr =[];
for(let i = 0; i <= 9 ; i++){
  num = y.replace('*',i);
  if(num % 3 == 0)arr.push(num);
}
console.log(arr);
//exercise 4
var z ='1234567890*';
var number, array =[];
for(let i = 0; i <= 9 ; i++){
  number = z.replace('*',i);
  if(number % 6 == 0) array.push(number);
}
console.log(array);

