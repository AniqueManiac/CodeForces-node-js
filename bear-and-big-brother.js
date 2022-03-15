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
 
 let w = readline().split(" ").map((a) => parseInt(a));
 let l =w[0];
 let b =w[1];
 let c =0;
  while(l <= b ){
     l = l *3;
     b = b *2;
     c++;
  }
  console.log(c);

}

