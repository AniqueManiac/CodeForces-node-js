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
 
 let countStone = parseInt(readline());
 let stone = readline(); 
 let count = 0;
 for (var i = 0; i < countStone-1; i++) {
     if(stone[i] === stone[i+1]){
        count++;
     }
 }
 console.log(count)
 


}
