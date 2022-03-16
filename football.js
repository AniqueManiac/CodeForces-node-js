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
   let lne = readline();
   let prev = lne[0];
   let count= 0;
   let arr =[];
   let dang = false;
   let no = false;
   
   for (var i = 1; i < lne.length ; i++) {
       
       if(lne[i] == prev ){
         count++;
         
         if(count>=6){
           dang = true;
         }
         
       }else{
         no =true;
         prev = lne[i];
         count =0;
       }
       
    
   }

   if(dang && no ){
    console.log("YES");
   }else{
    console.log("NO");
   }
   
}

//type input.txt | node code.js
