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
  let codeValue =0;
  let arr =[];
  let st="";
  let newstr ='';
  for (var i = 0; i < 2; i++) {
      st = readline();
      for(let j =0; j <st.length ; j++){
          if(st.charCodeAt(j) > 96){
             codeValue = st.charCodeAt(j) -32;
             newstr += codeValue;
          }else{
             newstr += st.charCodeAt(j);
          }
      }
      arr.push(newstr);
      newstr ="";
      
  }


    if(parseInt(arr[0]) < parseInt(arr[1])){
        console.log(-1);
    }else if (parseInt(arr[0]) > parseInt(arr[1])) {
        console.log(1);       
    }else{
        console.log(0);
    }
}
