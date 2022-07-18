import { Component, OnInit } from '@angular/core';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim='your perfect banking partner'
  account =' Enter your account number'
  acno='' // defining a var to hold the  acnovalue enter by user
  pswd=''//def a var for hold pswd enter by user
  

  //database creating as object of object key should be acnt num 
   userDetails:any = {
    1000:{acno:1000,username:'neer',balance:50000,password:1000},
    1001:{acno:1001,username:'beer',balance:60000,password:1001},
    1002:{acno:1002,username:'veer',balance:80000,password:1002},

    }
   

  constructor() { }
// ngoninit life cycle of angular
  ngOnInit(): void {
  }
// user defined fn should be always down of ngonit and inside class
  acnochange(event:any){
    this.acno=event.target.value // our fn arugumnt get the user enter value from acno which
    console.log(event.target.value);// is defined in class to access var in class this.
    
  } 
  
  pswdchange(event:any){
    this.pswd=event.target.value // our fn arugumnt get the user enter value from acno which
    console.log(event.target.value);// is defined in class to access var in class this.
    
  }   


//  login(){

//   //defining a var inside fn to hold user enter acno number it is class

//   var acno= this.acno
//   var pswd=this.pswd
//      let userdetails=this.userDetails// assigning the userdetails to a var o.w always we need to call
//      // this. userDetails sinec it is a class obj
//       if (acno in userdetails){

//         if(pswd == userdetails[acno]['password']){
//           alert('login successful')

//         }
//         else{
//           alert('Incorrect pasword')
//         }

//       }
//       else{
//         alert('user doesnt exist')
//       }
//  }
login(a:any,p:any){

  //defining a var inside fn to hold user enter acno number it is class

  var acno= a.value
  var pswd=p.value
     let userdetails=this.userDetails// assigning the userdetails to a var o.w always we need to call
     // this. userDetails sinec it is a class obj
      if (acno in userdetails){

        if(pswd == userdetails[acno]['password']){
          alert('login successful')

        }
        else{
          alert('Incorrect pasword')
        }

      }
      else{
        alert('user doesnt exist')
      }
 }
}

