// +++++++++.   Add tow numbers. +++++++++

function addTowNum( number1 , number2){
   // console.log( number1 + number2)
}
//addTowNum( 45 ," name")

// Result stroed in a variable

function addTowNum( number3,number4 ){
    //const Result = number3+number4
   // return Result
              // Another process.    after return statement  any valus are not executed
   return number3 + number4
}
const Result = addTowNum( 50 , 65 )
//console.log(Result )

// +++++++++.     string interpulation using function. +++++++++

function UserLoggin ( Username){
       return ` loggedin user name is ${ Username}`
}
 //console.log(UserLoggin( " Manimohan"))
// console.log(UserLoggin( )). [ if we pass empty value the result is undefined]
 // In that case we check the value of " Username"

 function UserLoggin ( Username){
   if( Username === undefined){ // this also define  !Username
      //console.log(' please put your username');
      return
   }
   return ` loggedin user name is ${ Username}`
 }
// console.log(UserLoggin( ))

 // +++++  How to pass " rest oparetor " in a function // use to convart multiple data to a arry  ++++

function calculatecartPrice( ...value1 ){
        return value1
 }
//console.log(calculatecartPrice(400,300 ,500,700));

// ++++   How to pass Object in a function ++++ 

const CardDitils = {
    Type: " T- Shart",
    Size: " M ",
    Price : 999
}
function HandelObject( myObject){
  // return console.log(` My ${ myObject.Type} size is ${ myObject.Size} and this price was ${ myObject.Price}`);
}
HandelObject( CardDitils);


// Another way 

function HandelObject1( myObject1){
 //  return console.log(` My ${ myObject1.Type} size is ${ myObject1.Size} and this price was ${ myObject1.Price}`);
}
HandelObject1( 
   {
    Type: " Shart",
    Size: " M ",
    Price : 1499
   }
);

// ++++   How to pass Array in a function ++++ 
 
const MyArray = [ 200,400, 600, " Manimohan"]
 function HandelArray( thisArray){
    return thisArray[ 3]
 }
// console.log( HandelArray(MyArray));

// another way

function HandelArray1( thisArray){
   return thisArray[ 2]
}
console.log( HandelArray1(
   [ 200,400, 600, " Manimohan"]
));
