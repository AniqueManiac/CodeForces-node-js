"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputStr = "";
let currentLne = 0;

process.stdin.on('data' , inputStdin =>{

	 inputStr += inputStdin;
})

process.stdin.on('end' , _ =>{
    inputStr = inputStr.trim().split('\n').map( string =>{
    	return string.trim();
    })
    
main();
})

function readline(){
   return inputStr[currentLne++];
}

function main(){
  
  let name = readline();
  let count =0;
  for (var i = 97; i <= 122; i++) {
      if(name.includes(String.fromCharCode(i)) ) {
          count++;
      }
  }
  if(count%2 === 0){
    console.log("CHAT WITH HER!")
  }else{
    console.log("IGNORE HIM!")
  }
  
}
