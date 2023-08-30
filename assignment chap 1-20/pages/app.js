//  =============================chapter 1 ==================
// // questions:
// alert("firstname")
// alert("lastname")
// alert("email")
// alert("phone Number")
// alert("password")    
//  =============================chapter 2 ==================
// // // questions:
//  var AreebMalik = "blue";
//  console.log(AreebMalik);
// 2. questions
// var areeb;
// areeb = "hello world !";
// console.log(areeb);
// // 3. questions
//  var teamName= "areeb";
//  alert("he is a very good boy" +" "+teamName);
// // que 4
// var bestMan = "Charlie";
// bestMan = "david";
// console.log(bestMan);
// 
// =============================chapter 3 ==================
// //  que 1
//  var caseQTY;
//  console.log(caseQTY);
// //  que 2
//  caseQTY = 144;
//  console.log(caseQTY);   
//   que 3
//  var num = 4;
//   console.log(num);
// //  que 4
//  var sum ;
//  sum = 2 + 2 ;
//  console.log( "the sum of two number is " + sum ) ;
// // que 5 
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// console.log( orderTotal );
// // que 6 
//  var num =45;
//  console.log(num);
//   num = 45 + 35;
// //   console.log(num);  
// ============================chapter 4 ==================
// // que 1
//  var productcost = 3.45;
// console.log(productcost);
// //  que 2 
//  var NameOfBand;
//  console.log(NameOfBand);
// que 3
//  var areeb = 45;
// que 4 
// var AreebMalik;
// que 5    
// legal variable :
// ===== ========


// var firstName;
// var _myVariable;
// var $amount;
// var player123;

//  illegal variable:
// ======= =========
// var 123abc;        // starts with a digit
// var my-variable;   // contains a hyphen
// var first name;    // contains a space
// var var;           // reserved keyword
// var function;      // reserved keyword


// ============================chapter 5 ==================
// // que 1
// let remainder = 10 % 3;  // This assigns the value 1 to the variable 'remainder'
// console.log(remainder);
// que 2
// var num = 20% 6;
// console.log(num); the value is 2
// // que 3
//  var LargeNum ;
//  LargeNum = 1000*2000;
//  console.log(LargeNum);
//  que 4
//  var a= 20;
//  var b =10;
//  var subtract= a - b;
// //  console.log(subtract);
// var a = 10;
// var b = 3;
//  var c = 10%3;
//  console.log("the remainder of the a & b is = " +c);
// //  que 5 
// var firstnumber = 10;
// var secondnumber = 34;
// var Mutiplication= firstnumber * secondnumber ;
// console.log(Mutiplication);

// ============================chapter 6 ==================
// // que 1
//  var x = prompt("enter any number");
//  x++;
//  console.log(x);
// // que 2
// var x = prompt("enter any number");
// x --;
// console.log(x);
// we can use both x = x-1 or x -- both are same 
// // que 3
// var x = 50;
// var y = x++;
// console.log(x , y);
// //  51, 50
// //que 4
// var y = 50;
// var z = --y;
// console.log( y ,z );
// //  49,49
// que 5
//  var newNum = num --;
// que 6 

// var y = x+1;
// or 
// // var y = x++;
// que 7
//  var x = 14;
//   x++;
//   alert( "the new number is " + x);


// ============================chapter 7 ==================
// que 1
// var calculatedNum = 2 + (2 * 6);
// console.log("the calculated number is" +" " +calculatedNum);
// 14
// que 2
// var calculatedNum = (2 + 2) * 6;
// console.log("the calculated number is" +" " +calculatedNum);
// 24
// que 3
// var calculatedNum = (2 + 2) * (4 + 2);
// console.log("the calculated number is" +" " +calculatedNum);
// 24 
// que 4
// var calculatedNum = ((2 + 2) * 4) + 2;
// console.log("the calculated number is" +" " +calculatedNum);
// 18 
// // que 5
// var result = (((2+2)* 4)+10);
// console.log(" the result is "+ result); 
// acc to this euqation  you get 26 not 56 ,because it's not possible at any how.
// // que 6
// var result =((2+(2*4))+10);
// console.log(result);
// // que 7
// var result = (4/2)*4;
// console.log(result);
// hence the result is 8. Producing 5 from this equation is impossible.
 

// ============================chapter 8 ==================
// que 1
// var num = "2" + "2";
// console.log("the value of the equation is "+ num);
// it gives you the answer 22 because it takes the 2 and 2 as string.
// que 2

// var message = ("Hello," + "Dolly");
// alert(message);
// Hello,Dolly
// // que 3
// var result = ("33"+ 3);
// alert(result);
// it gives 333
// // que 4
//  var firstName= "Pakistan";
//  var secondName= "Zindabad";
//  var fullName= firstName + " " + secondName;
//  alert(fullName);

// // que 5
// var student = "Areeb scored ";
// var number = 54;
// var marks = "in all subjects";
// var result= student+number+ " " +marks;
// console.log(result);


// que 6

// var student = "Areeb scored good marks";
// var marks = "in all subjects";
// var result= student+" "+marks;
// console.log(result);


// ============================chapter 9 ==================
// // que 1
//  var firstName=prompt("enter First Name");
// que 2
// var country = prompt("country", "china");

// // que 3
// var yourName = prompt("Enter Your Name");
// // que 4
//  var name =prompt("enter your name:","Areeb");
// // que 5
// var question = "what's your favourite color";
// var choice="blue";
// var result= prompt(question, choice);
// // que 6
// var question="what's is your hobby";
// var choice= "cricket?";
// var result=prompt(question,choice);
// alert(result);


// ============================chapter 10 ==================
// que 1
// var city = "Karachi";
// if (city = "Karachi")
//  {
// console.log("The City OF Lights"+" "+ city);
// }
// // que 2
// var x =prompt("enter the value of x");
// var y =prompt("enter the value of y");
// if(x===y){
//     var z =prompt("enter the value of z");
// }
// else{
//     console.log("x is not equal to y");
// }
// que 3
// var zip =prompt("enter zip code");
// if(zip ==10010){
//     alert("karachi");
// }
// else{
//     alert("please write the corret city");
// }
// que 4
// var x =+prompt("enter any number");
// if (x===5){
//     x=1;
//     console.log("x ="+" "+x);
// }
// else{
//     console.log("error");
// }


// ============================chapter 11 ==================
// que 1
// var x =prompt("enter the value of x");
// var y =prompt("enter the value of y");
// if(x!==y){
//     alert("x is not equal to y");
// }
// else{
//     alert("x is equal to y");
// }
// que 2
// var x =prompt("enter the value of x");
// var y =prompt("enter the value of y");
// if(x>=y){
//     console.log("x is equal or greater than y");
// }
// else{
//     alert("x is not equal or greater than y");
// }
// que 3
// var x = prompt("enter the value of x ");
// if(x!==7){
//     x=20;
//     console.log("the new value assign ot x is"+" "+ x);
// }
// que 4

// var x = prompt("enter the value of x");
// var y = prompt("enter the value of y");
// if(x!==y){
//     alert("Congratulations");
// }

// que 5
// var firstName=prompt("enter your first name");
// var secodName= "huzaifa";
// if(firstName!==secodName){
//     alert("No match");

// }
// else{
//     console.log("match found");
// }
// 


// ============================chapter 12 ==================
// // que 1 
// var x = prompt("enter the value of x");
// var y = prompt("enter the value of y");
// if(x >=y){
//     alert("alert the value of x is equal or greater than y");
//     }
//     else{
//         alert("the value of x is not equal or greater than y ");
//     }
// que 2
// var english =+prompt("enter english marks");
// var urdu =+prompt("enter urdu marks");
// var maths =+prompt("enter maths marks");
// var science =+prompt("enter science marks");
// var obtaiedMarks = english+urdu+maths+science;
// totalMarks= 400;
// console.log("total obtained marks are "+ obtaiedMarks);
// var percentage= obtaiedMarks/totalMarks *100;
// console.log("total percentage is "+percentage)
// if(percentage >=80){
//     console.log("your grade is A+");
// }
// else if(percentage >=70 && percentage <=80){
//     console.log("your grade is B+");
// }
// else if(percentage >=60 && percentage <=70){
//     console.log("your grade is C+");
// }

// else if(percentage >=50 && percentage <=60){
//     console.log("your grade is D+");
// }

// else if(percentage >=40 && percentage <=50){
//     console.log("your grade is B+");
// }
// else{
//     console.log("you are fail");
// }

// que 3
// var a =prompt("enter the value of a ");
// if (a == 10) {
//     alert("a is 10");
//    }
//    else{
//     alert("the correct value of a is "+a);
// //    }
// var city =prompt("enter city name");
// if (city ==="karachi"){
//     alert("it's karachi");
//     }
//     else if(city ==="lahore"){
//         alert("it's lahore");
//     }
//     else {
//         alert("there's no such city")
//     }


// ============================chapter 13 ==================
// que 1
// var a = prompt("enter the value of a");
// var b = prompt("enter the value of b");
// var c = prompt("enter the value of c");
// var d = prompt("enter the value of d");
// if( a==b && c==d)
// {
// console.log(" both conditions are true ");
// }
// else{
//     console.log("condition are not true");
// }

// que 2
// var a = prompt("enter the value of a");
// var b = prompt("enter the value of b");
// var c = prompt("enter the value of c");
// var d = prompt("enter the value of d");
// if( a==b || c!==d)
// {
// console.log(" both constition is true ");
// }
// else{
//     console.log(" one condition is true and one is false");
// }
// que 3
// var name1 =prompt("enter name");
// var name2 = prompt("enter name");
// age =+prompt("enter age ");
// if( name1 ==="Hamza" || name2==="Arsalan" && age<60){
//     console.log("both conditions are true ");
// }
// else{
//     console.log("one of the condition is true");
// }
// que 4 
// var a =+prompt("enter first number");
// var b =+prompt("enter second number");
// if(a<b || a>b){
//     alert("one of the condition is true");
// }
// else{
//     alert("non of the condition is true");
// }
// que 5
// var name1 =prompt("enter first name");
// var name2= prompt("enter second name");
// if(name1 ==name2){
//     alert ("variable1 "+ name1+" " +"variable2 "+ name2);
// }
// else {
//     alert("varible1 not matches with variable2");
// }

// ============================chapter 14 ==================
// que1 
// var password =prompt("enter password");
// if(password !==""){
//     if(password.length <=5){
//         alert("password must be grater than 5");
//     }
//     }
// else{
//     alert("OK");
// }
// que 2
// var a = +prompt("enter the value of a");
// var c = prompt("enter the value of c")
// if (a == 1) {
// if (c === "Max") {
//  alert("OK");
//  }
// }
// else{
//     alert("not ok");
// }
// we can also do this by using && operator which shorter the code

// que 3
// var a = +prompt("enter the value of a");
// var c = prompt("enter the value of c")
// if (a==1 && c === "Max") {
//  alert("OK");
//  }
// else{
//     alert("not ok");
// }
// que 4

// var a =10;
// var b=10;
// if(a===b){
//     if(a<=b){
//         alert("both conditions fulfill");
//     }
// }


// ============================chapter 15 ==================
// // que 1
// var arr=[];
// // que 2
// var arr =["areeb"];
// // que 3
// var alphabet = ["h","i","j","k"] ;
// alert(alphabet[2]);
// // que 4
// var alphabet=["h","i","j","k", "l","m", "n", "o"];
// console.log(alphabet.length);
// // que 5
// var arr=["a"];
//  arr[1]="b";
//  alert("the new element is "+arr[1]);


// ============================chapter 16 ==================
// // que 1
// var arr = ["apple"];
// arr.push("banana");
// alert("the last element of the array is "+arr.slice(1));

// // que 2
// var alphabet = ["h","i","j","k"];
// alphabet.pop('k');
// console.log(alphabet);

// // que 3
// var alphabet = ["h","i","j","k"];
// alphabet.push(5);
// console.log(alphabet);



// ============================chapter 16 ==================

// que 1

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();
// console.log(sizes);

// que 2

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes[0]= 234;
// console.log(sizes);

// // que 3
// var arr = ["apple"];
// arr.unshift("banana");
// alert("the first element of the array is "+arr[0]);

// que 4

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2,0,"L");
// console.log(sizes);
// sizes.splice(6,0,"XXXl");
// console.log(sizes);
// que 5
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regsize =sizes.slice(0,3);
// console.log(regsize);

// que 6

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1,0,"zoo","boo");
// console.log(pets);
// pets.splice(1,3);
// console.log(pets);

// que 7
//  var pets = ["dog", "cat", "ox", "duck", "frog"];
//  pets.splice(1,2);
//  console.log(pets);

// que 8

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// var reducePets= pets.slice(3,5);
// console.log(reducePets);


// ============================chapter 17-20 ==================

// que 1

// var name1=prompt("enter your name");
// for( var i=0; i<10;i++){
//     console.log(name1 );
// }
// }
//  var a = +prompt("enter number to print table")
// var arr1 = ['areeb','talha','usaid','zohaib','zubair','imad','dain','hsauh'];
// for( var i=0;i< arr1.length;i++)
// {
//     console.log( arr1[i])
// console.log( a +" X " + i + " = " + a*i);
// }
// var number = +prompt("enter any number"); // The number for which you want to create a multiplication table

// for (var i = 1; i <= 10; i++) {
//     var result = number * i;
//     console.log(number + " * " + i + " = " + result);
// }


// que 2

// var name1 =prompt("enter your name");
// for(var i=1;i<=12;i++){
//     console.log(name1);


// // que 3

// for (var i = 0; i <= 4; i++){}

// que 4'


// var name1 =prompt("enter your name");
// for (var count = 0; count < 100; count++) {
//     console.log(name1);
// }

// que 5


// var name1 =prompt("enter your name");
// for (var i= 3; i < 0; i--) ;
// {
//     console.log(name1);
// }


// que 6
// var array = [1, 2, 3, 4, 5];
// var numberOfElements = array.length;

// console.log( "the number of element in th array is "+numberOfElements); // Output: 5

// que 7 

// var flag =true;

// que 8

// var name1= prompt("enter the name ");
// for (i=0;i<name1.length;i++){
//     console.log(name1);
// }

// que 9


// var name1= prompt("enter the name ");
// for( i=0;i<10;i++){
//     if(i ===1){
//         alert("counter value is "+i );
//     }

// }



// que 10


// var userName = ['areeb','talha','usaid','zohaib','zubair','imad','dain','hsauh'];
// var name1=prompt("enter the first name");
// var nameFound = false;
// for(i=0;i < userName.length;i++){
//     if(name1 ===userName[i])
//     {
//         nameFound=true;
//         break;
//     }
// }
// if(nameFound){
//     alert(name1+ "the name is found");
// }
//     else{
//         alert("user not found");

//     }




// que 11 

// var list = ['areeb','talha','usaid','zohaib','zubair','imad','dain','hsauh'];
// var firstName=prompt("enter the first name");
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//  if (firstName === list[i]) {
//  matchFound = true;
//  break;
//  }
// }
//  if(matchFound){
//     alert("Match found");
//  }

//  else{
//     alert("match not found");
//  };


// que 12

// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];
// for(i=0;i<firstArr.length;i++)
// {
//     for(j=0;j<secondArr.length;j++)
//     {
//         console.log(firstArr[i] +secondArr[j]);
//     }
// }



// after class tesst javascript
// round off method





// var num = 5.7;
// var convertedNum=Math.round(num);
// console.log(convertedNum);
// answer 6

// var num = 5.2;
// var convertedNum=Math.round(num);
// console.log(convertedNum);
// answer 5



// var num = 5.7;
// var convertedNum=Math.ceil(num);
// console.log(convertedNum);
// answer 6
// ceil means to round of zabardasti krky agay lay jaega

// floor


// var num = 5.7;
// var convertedNum=Math.floor(num);
// console.log(convertedNum);
// answer 5
// ceil means to round of zabardasti krky pechy lay jaega


// var num = Math.random();
// console.log(num);
// generate random number in between 0 to 1
// task 1
// var num = Math.random();
// var newNum= Math.round(num);
// console.log(newNum);
// if(newNum === 0){
//     console.log("head");
// }
// else if(newNum===1){
//     console.log("Tails");
// }
// else{
//     console.log("something went wrong");
// }
// ================ ===========another method of declaring string in to number =================================
//  var name1=prompt("enter any name");
//  var b =Number(name1);
// //  console.log(b);
// var name1=prompt("enter any number");
// var a =Number()
// var b =parseInt(a);
// var b =parseInt(b);
// console.log(a);

// ====================================== date ================================================
// var data= new Date()
// console.log(data);
// jab tk mai refresh nae kroga tab tk yh new date nae dekhaiga 
// uptodate rakhny ke liyh apko dosra function lagaya jata ha 

// var data= new Date()
// console.log(data.getDay());
// var weeks= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
// console.log(weeks[3]);
// var date = new Date();
// console.log(date);
// var getDay = date.getDay();
// var getMonth= date.getMonth();
// var months= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
// console.log(months[getMonth]);



// var weeks= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
// var date = new Date ();
// var currentDate = weeks[date.getDay()];
// console.log("the current day is "+ currentDate);

// ==================== to convert date type thing into string =================

//  var weeks=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
//  var date = new Date();
//  var convertedDate= date.toLocaleString();
//  console.log(convertedDate);    


//  =========== 19 August ========================
// 


// // function 
// jab tk function ko call nae kregnay tb tk function nae ata


// function addNumbers(a,b,c){
//     return a+b-c;
// }
// var result= addNumbers(5,3,1);
// console.log(result);

// function abc(){
//     console.log("Hello Gandu");
// }
// // abc();
// function multiplication(a,b,c,v,){
//     return a*b*c*v;
// }
// let reserved =multiplication(5,6,5,1);
// console.log(reserved);

// nechy wala code ma first line abc abh parameter hai(receiving)  aur return wali line(passing) mai woh argument kahegay 
//  

// function avg(a,b,c){
//  return (a+b+c)/3;
// }
// let result = avg (10,12,40);
// console.log("The Average of three words is "+result);


// function name1(a,b){
//     console.log("Hello " + a,b);
// }
// name1("areeb","talha");

// name 1 mai ab value areeb 

// function name1 (a,b,c,d,e){
//     console.log("hello " + a,b,c,d,e );
// }
// name1("areeb","talha","usaid","huzaifa","zunair");



// function call(firstName,middleName,lastName){
//     return firstName+middleName+lastName;
// }
// let fullName = "areeb "+"ahmed" +" "+ "malik"; 
// console.log(fullName);

//  ===============calculator ========================

// function calculator(a,b,operator){
//     if ( operator === "+"){
//         return a+b;
//     }
//     else if (operator === "-"){
//         return a-b;
//     } 
//     else if (operator === "*"){
//         return a*b;
//     }
//     else if(operator === "/"){
//     return a/b;
//     }
//     else{
//         console.log("error");
// }
// }

// let operator = prompt("enter operator");
// let a= +prompt("enter first number");
// let b= +prompt("enter second number");
//  let reserved = calculator(a,b,operator);
// console.log("the result is " + reserved);

//  global and local variable

// local varible sirf curly braces ke andar he mily ga aur global kahen bhe mil skta ha baher bhe 
// //  var b = "ejdsnnvfd"; 
// var a = "hello "
// function abc(){
//      a = "jdcnj ";
// //   console.log(b);
//  }
//  abc();
//  console.log(a);


// ================================= 26 august ===================================


// function abc(username){
// console.log("Hello"+username);
// }
//  var img = document.getElementById("img")
// function image(){
//     img.src ="https://w0.peakpx.com/wallpaper/388/704/HD-wallpaper-dragonball-amoled-goku-minimal-neon.jpg"
// }
 var img = document.getElementById("img")
 function abc(){
    img.src ="https://w0.peakpx.com/wallpaper/388/704/HD-wallpaper-dragonball-amoled-goku-minimal-neon.jpg"
 }
 function abc2(){
    img.src = "https://c4.wallpaperflare.com/wallpaper/203/59/805/son-goku-dragon-ball-dragon-ball-z-wallpaper-preview.jpg"
 }