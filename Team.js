"use strict";

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let iStr = "";
let cLne = 0;


process.stdin.on('data' , inputStdin => {
    iStr += inputStdin;
});

process.stdin.on('end' , _ =>{
	 iStr = iStr.trim().split('\n').map((string)=>{
       return string.trim();
	 });
	 main();
});

function readline(){
	return iStr[cLne++];
}

function main(){
	let c = 0;
	let t = readline();
	let canSolve =0;
	while(c < parseInt(t)){
		  let ques = readline().split(' ').map( st => parseInt(st));
		  let solve = 0;
       for (var i = 0; i < ques.length; i++) {
       	if(ques[i] == '1'){
       		solve++;
       	}
       }
       if(solve >= 2){
         let v= canSolve++; 
       }
	 c++;
	}
	console.log(canSolve);	
}

