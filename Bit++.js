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
  let t = parseInt(readline());
  let c =0;
  let count =0;
  while(c < t){
    let st = readline();
    if(st === "X++" || st ==="++X"){
        count++;
    }else if(st === "X--" || st === "--X"){
        count--;
    }
    c++;  
  }
  console.log(count);

}
