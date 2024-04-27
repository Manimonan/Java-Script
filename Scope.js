// Scope are tow types - Global Scope , local Scope.
// 'var' have global scope 
// 'let' and 'cnst' are local scope

let a = 30;
if (true){
    let a = 300;
   // console.log(" Inear :",a);
}
//console.log( a)

// Nexted Scope

function one(){
    const username = " Manimohan"
    function tow(){
        const website = " Youtube"
        console.log(username);
    }
    //console.log(website);
    tow()
}
one()