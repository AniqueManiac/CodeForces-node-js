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
  let t = readline().split(" ").map(a => parseInt(a));
  let area = t[0]* t[1];
  let fit = 0;
  if(area%2 === 0){
   fit = area/2;
  } else{
  	fit = (area-1)/2
  }
  console.log(fit);
}
