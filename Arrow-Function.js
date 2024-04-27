//.   ========= Context of this =========
const user ={
    Username : " user@gmail.com",
    Price: 999,
    WelcomeMassage : function(){
          //console.log( ` Mr. ${ this.Username}, welcome to the website`);

          // this well provide current context of user
        }

}
// user.WelcomeMassage()
// user.Username = " Sma";
// user.WelcomeMassage()

//console.log(this);
// in node envarment this will provide empty object

// some other case 

// function chai() {
//      let Username = " some one";
//      console.log(this.Username);
// }
// chai()

// const chai = function someone() {
//     let username = " Tarafdar";
//     console.log(this.username);
    
// }

// ========= Arrow Function =========
//syntax _____. () => {}

const Arrow =  ()=> {
    console.log( 'This is a arrow Function');
}