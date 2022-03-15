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
    
   let jm =0;
   let im =0;
   for(let i = 0; i < 5; i++) {
     let ti = readline().split(" ").map(a => parseInt(a));
        for(let j =0; j<5 ; j++){
            if(ti[j] === 1){
                jm = Math.abs(2-j) + Math.abs(2-i);
            }        
        }
        

   }
   console.log(jm);

}
