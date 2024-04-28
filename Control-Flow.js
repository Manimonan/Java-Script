// if - elase
// >, <, >= ,<=, == , !=, === ,!==

// let temp =36;
// if (temp >=37 ){
//       // console.log("Switch on the Air conditionar");
// }else{
//     //console.log("Switch on the fan");
// }

// use variable in execution line

// let score = 310;
// if(score > 300 ){
//     const power = " flay";
//   //  console.log( ` The power is : ${ power}`);
// }
// implecite if 
// const pocketMoney = 1000;
// if ( pocketMoney < 1500) console.log("this is low for this monthe"); 

// multiline if else..

// let balance = 1000;
// if(balance < 500){ 
//     console.log( " Your a/c balance is low");
// }else if( balance <1000){
//     console.log( " Your a/c balance is minimum");
// }else if (balance < 1500){
//     console.log( " Your a/c balance is saficeant for online shoping");
// }else{  console.log( " Your a/c balance is greter than 1500");}


// AND , OR logc multiple condition check

// const loginID = true;
// const onlinePayment = true;
// const emailId = true;
// const GoogleId = false;

//  if(loginID & onlinePayment ){
//      console.log(' You will parces the cource');
//  }
// if(emailId || GoogleId){
//     console.log(' You will parces the cource');
// }


// Switch Case
// let monthe = 1;
// switch (monthe) {
//     case 1:
//         console.log(" January");
//         break;
//     case 2:
//         console.log(" February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;


//     default:
//         console.log('any monthe name');
//         break;
// }


// const DayName = "Sunday";
// switch (DayName) {
//     case "Monday":
//         console.log(` ${DayName} is the fast day of  the week`);
//         break;
//     case "Tuesday":
//         console.log(` ${DayName} is the second day of  the week`);
//         break;
//     case "Wednesday":
//         console.log(` ${DayName} is the thaird day of  the week`);
//         break;
//     case "Thusday":
//         console.log(` ${DayName} is the forth day of  the week`);
//         break;
//     case "Friday":
//         console.log(` ${DayName} is the fifth day of  the week`);
//         break;
//     case "Saterday":
//         console.log(` ${DayName} is the six day of  the week`);
//         break;
//     case "Sunday":
//         console.log(` ${DayName} is the seven day of  the week`);
//         break;
//     default:
//         console.log(`Manimohan`);
//         break;
// }


// Truethy and falsy value

// Truethy value : "0" , ' false', "  ", [], {}, function(){}
// folsy value - when we assume a condition is completly false 
//false, 0 , -0 , Bigint 0n , undifined, null, NaN, ""
//  const userEmail = ""
//  if (userEmail){
//    console.log( `This is a user email`);
//  }else{
//    console.log( `Put a valide email address`);
//  }
    
 // nullish coalescing oparators (??) use for null and undifined

 //let val1 ;
 //val1 = 10??15;
 //val1 = null ?? 15;
 //val1 = undefined?? 10;

 //console.log( val1);


 // Terniary oparator
 // condition ? True: false

 const hotCoffePrice = 50;
 hotCoffePrice > 80 ? console.log(" Value is too mach"): console.log(" value for money");